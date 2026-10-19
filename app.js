const pad = n => String(n).padStart(2, "0");
const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
const esc = s => String(s).replace(/[&<>"]/g, c => ESC[c]);
const fmt = d => new Date(d + "T00:00").toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

function links() {
  for (const [id, u] of [["sub", SITE.substack], ["sub2", SITE.substack], ["gh", SITE.github], ["gh2", SITE.github]]) {
    const e = document.getElementById(id);
    if (e) e.href = u;
  }
}

function plate(p, i) {
  const no = `<span class="no mono">${pad(i + 1)}</span>`;
  return p.image
    ? `<div class="plate ${p.plate}"><img src="${esc(p.image)}" alt="${esc(p.title)} screenshot" loading="lazy">${no}<span class="t band display">${esc(p.title)}</span></div>`
    : `<div class="plate ${p.plate}">${no}<span class="t display">${esc(p.title)}</span></div>`;
}

function renderIndex() {
  links();
  document.getElementById("projects").innerHTML = PROJECTS.map((p, i) => `
    <a class="card" href="project.html?p=${p.slug}">
      <div class="meta mono"><span>${pad(i + 1)} / ${pad(PROJECTS.length)}</span><span>${esc(p.status)}</span></div>
      ${plate(p, i)}
      <h2 class="display">${esc(p.title)}</h2>
      <p class="tag">${esc(p.tagline)}</p>
      <div class="go mono">${p.posts.length ? p.posts.length + (p.posts.length > 1 ? " posts" : " post") : "Project page"} &gt;</div>
    </a>`).join("");
}

function renderProject() {
  const slug = new URLSearchParams(location.search).get("p");
  const i = PROJECTS.findIndex(x => x.slug === slug), p = PROJECTS[i];
  const root = document.getElementById("root");
  if (!p) {
    root.innerHTML = `<a class="back mono" href="index.html">&lt; All projects</a><p style="padding:24px">Project not found.</p>`;
    return;
  }
  document.title = `${p.title} — The Receptaculum`;
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  const posts = p.posts.length
    ? `<ul class="posts">${p.posts.map(([t, d, u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(t)}</a><span class="label empty">${fmt(d)}</span></li>`).join("")}</ul>`
    : `<p class="empty">No posts yet.</p>`;
  root.innerHTML = `
  <a class="back mono" href="index.html">&lt; All projects</a>
  <div class="p-head"><h1 class="display">${esc(p.title)}</h1>
    <div class="side mono"><div>${pad(i + 1)} / ${pad(PROJECTS.length)}</div><div>${esc(p.status)}</div><div>${p.year}</div></div></div>
  <div class="p-body">
    <section class="lead"><span class="display">${esc(p.tagline)}</span>${esc(p.summary)}
      ${p.image ? `<div class="shot"><img src="${esc(p.image)}" alt=""></div>` : ""}</section>
    <section><div class="label" style="margin-bottom:12px">Links</div>
      ${p.live ? `<a class="btn red mono" href="${esc(p.live)}" target="_blank" rel="noopener">Live site &gt;</a>` : ""}
      <a class="btn mono" href="${esc(p.github)}" target="_blank" rel="noopener">GitHub &gt;</a>
      <div class="label" style="margin:28px 0 12px">Built with</div>
      <div class="chips mono">${p.stack.map(s => `<span>${esc(s)}</span>`).join("")}</div></section>
    <section><div class="label" style="margin-bottom:12px">Writing about it</div>${posts}</section>
  </div>
  <a class="back mono" href="project.html?p=${next.slug}" style="text-align:right;border-top:0">Next: ${esc(next.title)} &gt;</a>`;
}
