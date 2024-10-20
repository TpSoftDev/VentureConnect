fetch('V.json')
    .then(response => response.json())
    .then(data => {
        const vcList = document.getElementById('vc-list');
        data.vcs.forEach((vc, index) => {
            const div = document.createElement('div');
            div.classList.add('col-lg-4', 'mb-4');
            div.innerHTML = `
                <div class="card">
                    <img src="${vc.image}" class="card-img-top" alt="Venture Capital ${index + 1}">
                    <div class="card-body">
                        <h5 class="card-title">Venture Capital ${index + 1}</h5>
                        <p class="card-text">Industry: ${vc.industry}</p>
                        <p class="card-text">Investment: ${vc.investment}</p>
                        <a href="#" class="btn btn-primary">Learn more</a>
                    </div>
                </div>
            `;
            vcList.appendChild(div);
        });
    });
