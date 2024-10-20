document.addEventListener("DOMContentLoaded", function () {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const investorsList = document.getElementById("investors-list");
      const startupsList = document.getElementById("startups-list");

      data.investors.forEach(investor => {
        const investorHTML = `
          <div class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 ${investor.category.toLowerCase()}">
            <div class="item">
              <img src="${investor.image}" alt="">
              <span class="category">${investor.category}</span>
              <h6>${investor.amount_available}</h6>
              <h4>${investor.name}</h4>
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
        investorsList.innerHTML += investorHTML;
      });

      data.startups.forEach(startup => {
        const startupHTML = `
          <div class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 ${startup.category.toLowerCase()}">
            <div class="item">
              <img src="${startup.image}" alt="">
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
        startupsList.innerHTML += startupHTML;
      });
    })
    .catch(error => console.error('Error fetching JSON:', error));
});
