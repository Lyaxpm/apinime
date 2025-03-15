(async function () {
    const { pathname } = location;

    // Redirect jika URL berakhiran .html atau .html/
    if (pathname.endsWith(".html") || pathname.endsWith(".html/")) {
        location.replace("/");
    }

    // Ambil elemen root
    const rootElement = document.getElementById("root");
    rootElement.innerHTML = '<h1 style="text-align: center; padding: 2rem 1rem;">Loading...</h1>';

    // Tentukan endpoint API
    const apiEndpoint = pathname === "/" ? "/view-data" : `${pathname}/view-data`;

    try {
        // Fetch data dari API
        const response = await fetch(apiEndpoint);
        const { data } = await response.json();

        if (response.ok) {
            // Jika request berhasil, tampilkan data
            rootElement.innerHTML = `
                <div class="container">
                    <div class="card-wrapper">
                        <h3>Sources :</h3>
                        ${data.sources
                            .map(
                                (source) => `
                                <div class="card">
                                    <h4>${source.title}</h4>
                                    <p>
                                        <span class="key">Get</span> :
                                        <a href="${source.route}">${source.route}</a>
                                    </p>
                                </div>
                            `
                            )
                            .join("")}
                    </div>
                </div>
            `;
        } else {
            // Jika request gagal, tampilkan pesan error
            rootElement.innerHTML = `<h1 style="text-align: center; padding: 2rem 1rem;">${response.status} ${response.statusText}</h1>`;
        }
    } catch (error) {
        // Tangani kesalahan jaringan atau parsing JSON
        rootElement.innerHTML = `<h1 style="text-align: center; padding: 2rem 1rem;">Error: ${error.message}</h1>`;
    }
})();
