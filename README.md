# The Receptaculum

A catalogue of Justin Lewis's projects built with AI. Static site, no build step.

- `index.html` is the card grid; `project.html?p=<slug>` is the per-project page.
- All content lives in `data/projects.js`. To add a project, add an entry there.
- To use a screenshot on a card, save it to `img/<slug>.png` and add `image: "img/<slug>.png"` to the entry.
- Preview locally: `python -m http.server 8080`, then open http://localhost:8080.
