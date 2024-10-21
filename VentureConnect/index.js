document.addEventListener("DOMContentLoaded", function () {
  // Fetch the JSON data
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const startupsList = document.getElementById("startups");  // Assuming the container for startups is #startups

      // Function to render startups
      const renderStartups = (filterCategory) => {
        startupsList.innerHTML = '';  // Clear the container before rendering new results

        // Filter the startups based on category if a filter is active
        const filteredStartups = filterCategory ?
          data.startups.filter(startup => startup.category === filterCategory) :
          data.startups;

        filteredStartups.forEach(startup => {
          const startupHTML = `
            <div class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 ${startup.category.toLowerCase()}">
              <div class="item">
                <img src="${startup.image}" alt="${startup.name}">
                <span class="category">${startup.category}</span>
                <h6>Looking for: ${startup.amount_looking_for}</h6>
                <h4>${startup.name}</h4>
                <ul>
                  <li>Age: <span>${startup.age}</span></li>
                  <li>Growth Rate: <span>${startup.growth_rate}</span></li>
                  <li>Current Owners: <span>${startup.current_owners}</span></li>
                </ul>
                <div class="main-button">
                  <a href="#">Contact</a>
                </div>
              </div>
            </div>
          `;
          startupsList.innerHTML += startupHTML;  // Append the startup HTML to the container
        });
      };

      // Initially render all startups
      renderStartups();

      // Add event listeners to filter buttons
      const filterButtons = document.querySelectorAll('.properties-filter li a');
      filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();

          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('is_active'));

          // Add active class to the clicked button
          e.target.classList.add('is_active');

          // Get the category to filter (data-filter attribute value)
          const filterValue = e.target.dataset.filter === '*' ? null : e.target.textContent;

          // Render startups based on the selected filter
          renderStartups(filterValue);
        });
      });
    })
    .catch(error => console.error('Error fetching JSON:', error));
});
