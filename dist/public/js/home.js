!async function() {
  const {
    pathname: n
  } = location; (n.endsWith(".html") || n.endsWith(".html/")) && location.replace("/"); const a = document.getElementById("root"); a.innerHTML = '<h1 style="text-align: center; padding: 2rem 1rem;">Loading...</h1>'; const s = "/" === n?"/view-data": n+"/view-data",
  e = await fetch(s),
  {
    data: i
  } = await e.json(); e.ok?a.innerHTML = `\n        <div class="container">\n  <div class="card-wrapper">\n                <h3>Sources :</h3>\n                ${i.sources.map((n => `\n                        <div class="card">\n                            <h4>${n.title}</h4>\n                            <p>\n                                <span class="key">Get</span> :\n                                <a href="${n.route}">${n.route}</a>\n                            </p>\n                        </div>\n                    `)).join("")}\n            </div>\n        </div>\n    `: a.innerHTML = `<h1 style="text-align: center; padding: 2rem 1rem;">${e.status} ${e.statusText}</h1>`
}();
