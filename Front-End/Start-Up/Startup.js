fetch('S.json')
    .then(response => response.json())
    .then(data => {
        const startupList = document.getElementById('startup-list');
        data.startups.forEach((startup, index) => {
            const div = document.createElement('div');
            div.classList.add('col-lg-4', 'mb-4');
            div.innerHTML = `
                <div class="card">
                    <img src="${startup.image}" class="card-img-top" alt="Startup ${index + 1}">
                    <div class="card-body">
                        <h5 class="card-title">Startup ${index + 1}</h5>
                        <p class="card-text">Industry: ${startup.industry}</p>
                        <p class="card-text">Funding: ${startup.funding}</p>
                        <a href="#" class="btn btn-primary">Learn more</a>
                    </div>
                </div>
            `;
            startupList.appendChild(div);
        });
    });
