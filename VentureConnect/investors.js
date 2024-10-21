document.addEventListener("DOMContentLoaded", function () {
  // Fetch the JSON data
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const investorsList = document.getElementById("investors");  // Container for investors

      // Function to render investors
      const renderInvestors = (filterCategory) => {
        investorsList.innerHTML = '';  // Clear the container before rendering new results

        // Filter the investors based on category if a filter is active
        const filteredInvestors = filterCategory ?
          data.investors.filter(investor => investor.category === filterCategory) :
          data.investors;

        filteredInvestors.forEach(investor => {
          const investorHTML = `
            <div class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 ${investor.category.toLowerCase()}">
              <div class="item">
                <img src="${investor.image}" alt="${investor.name}">
                <span class="category">${investor.category}</span>
                <h4>${investor.name}</h4>
                <h6>Available Funds: ${investor.amount_available}</h6>
                <ul>
                  <li>Fund Left: <span>${investor.fund_left}</span></li>
                  <li>Successful Investors: <span>${investor.successful_investors}</span></li>
                  <li>Average IRR: <span>${investor.average_irr}</span></li>
                </ul>
                <div class="main-button">
                  <a href="#">Contact</a>
                </div>
              </div>
            </div>
          `;
          investorsList.innerHTML += investorHTML;  // Append the investor HTML to the container
        });
      };

      // Initially render all investors
      renderInvestors();

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

          // Render investors based on the selected filter
          renderInvestors(filterValue);
        });
      });
    })
    .catch(error => console.error('Error fetching JSON:', error));
});
