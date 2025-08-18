// Detect country via IP (Bonus 3)
function detectCountry(callback) {
    fetch('https://api.ipgeolocation.io/v2/getip?apiKey=423b29638059406095e6907a1d206458')
        .then(res => res.json())
        .then(ipData => {
            const ip = ipData.ip;
            fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=423b29638059406095e6907a1d206458&ip=${ip}`)
                .then(res => res.json())
                .then(data => {
                    callback(data.country_code2);
                })
                .catch(() => {
                    callback('US');
                });
        })
        .catch(() => {
            callback('US');
        });
}

// Dynamic header according to ip country
detectCountry(function(country) {
    const header = document.getElementById('taboola-header');
    if (header) {
        header.textContent = country === 'US' ? 'You May Like' : 'Recomendado para você';
    }
});

// Responsive aspect ratio helper
function getAspectRatio() {
    return window.innerWidth < 768 ? '3 / 2' : '6 / 5';
}

// Render Taboola widget items
function renderTaboolaWidget(items) {
    const grid = document.getElementById('taboola-grid');
    if (!grid) return;
    grid.innerHTML = '';
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'taboola-item';
        div.innerHTML = `
            ${item.categories && item.categories.length ? `<div class="taboola-category">${item.categories.join(', ')}</div>` : ''}
            <a class="taboola-thumb-link" href="${item.url}" target="_blank" rel="noopener">
                <img class="taboola-thumb" src="${item.thumbnail[0].url}" alt="${item.name}" title="${item.name}">
            </a>
            <a class="taboola-title-link" href="${item.url}" target="_blank" rel="noopener">
                ${item.name}
            </a>
            <a class="taboola-brand-link" href="${item.url}" target="_blank" rel="noopener">
                ${item.branding}
            </a>
        `;
        grid.appendChild(div);
    });
}

// Fetch Taboola API and build widget
function fetchTaboolaData() {
    fetch('https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init')
        .then(res => res.json())
        .then(data => {
            const items = data.list || [];
            renderTaboolaWidget(items);
        })
        .catch(() => {
            const grid = document.getElementById('taboola-grid');
            if (grid) grid.textContent = 'Erro ao carregar recomendações.';
        });
}

// Re-render widget on resize for aspect ratio
window.addEventListener('resize', fetchTaboolaData);

// Initial load
fetchTaboolaData();