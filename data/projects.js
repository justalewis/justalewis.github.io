// One entry per project. Add `image: "img/slug.png"` to replace the typographic plate with a screenshot.
const S = "https://justalewis.substack.com/p/";
window.PROJECTS = [
  {
    slug: "pinakes", image: "img/pinakes.png", title: "Pinakes", year: 2026, status: "Live", plate: "red",
    tagline: "A bibliometric index for Rhetoric & Composition.",
    summary: "Nearly 70 journals and more than 65,000 articles, drawn from CrossRef, OpenAlex, RSS feeds, and custom scrapers, then visualised as citation networks, co-citation graphs, and author timelines. Named for Callimachus's catalogue of the Library of Alexandria.",
    stack: ["Python", "Flask", "SQLite", "D3.js", "NetworkX", "Fly.io"],
    github: "https://github.com/justalewis/Rhet-Comp-Index", live: "https://pinakes.wacclearinghouse.org",
    posts: [
      ["Introducing Pinakes", "2026-03-17", S + "introducing-pinakes"],
      ["Pinakes Feature Release: OpenAlex Integration", "2026-03-19", S + "pinakes-feature-release-openalex"],
      ["On Monographs, Edited Collections and Scholarly Infrastructure", "2026-03-23", S + "on-monographs-edited-collections"],
      ["The (Partial) Shapes of Scholarly Careers", "2026-03-26", S + "the-partial-shapes-of-scholarly-careers"],
      ["A Session of Useful Miscellany", "2026-03-31", S + "a-session-of-useful-miscellany"],
      ["Twenty Ways to Look at a Discipline", "2026-04-07", S + "twenty-ways-to-look-at-a-discpline"],
      ["The Right to Erasure in Scholarly Indexes", "2026-06-16", S + "the-right-to-erasure-in-scholarly"],
      ["Eunomia's Labors", "2026-09-01", S + "eunomias-labors"]
    ]
  },
  {
    slug: "aletheia", image: "img/aletheia.png", title: "Aletheia", year: 2026, status: "Live", plate: "ink",
    tagline: "A course reader builder for open writing materials.",
    summary: "Open course readers for writing classes, assembled from openly licensed readings and assignments.",
    stack: ["Python", "Fly.io"],
    github: "https://github.com/justalewis/aletheia", live: "https://aletheia-oer.fly.dev",
    posts: [["Aletheia", "2026-10-18", S + "aletheia"]]
  },
  {
    slug: "graphion", title: "Graphion", year: 2026, status: "Open source", plate: "paper",
    tagline: "A publishing workstation for scholarly journals.",
    summary: "A single-editor publishing workstation. Upload a .docx, correct it through a form-based editor, click Render, and get back a semantic HTML galley, a tagged 6×9 PDF, an EPUB, JATS XML for indexers, Crossref deposit XML for DOI registration, and a one-click OJS package. Built for small, underfunded scholarly journals, and released under GPL-3.0.",
    pipeline: [".docx manuscript", "Markdown + YAML (Pandoc)", "Edit: form, WYSIWYG, or Markdown", "Render (Pandoc + Typst)", "HTML · PDF · EPUB · JATS · Crossref"],
    details: [
      ["Why it exists", "For about thirteen years Justin has done layout for Literacy in Composition Studies (LiCS). Each article meant preformatting in Word, then rebuilding the same typography by hand twice: once in InDesign for the PDF galley, once in Dreamweaver for the HTML galley. An issue of five or six articles cost roughly three days, and because the work happens two or three times a year, the tools had to be relearned each time. Graphion replaces both pipelines with a single Markdown source."],
      ["Accessibility", "Most rhetoric and composition PDFs are flat documents a screen reader can only read linearly. Graphion's HTML uses real article, section, and aside structure with ARIA labels, and its PDFs are tagged automatically by Typst (PDF/UA). Missing alt text is flagged as a lint error before deposit, and an optional Claude vision step can draft alt text for figures. Built-in buttons run veraPDF and pa11y audits and write detailed reports next to each article."],
      ["Scholarly infrastructure", "Findability depends on structured metadata: Crossref DOIs, JATS XML, ORCIDs, and reference linking. Small journals often skip these because hand-built deposits take so much effort, and unstructured citations never feed the citation graph. From the same Markdown, Graphion emits JATS with structured citations and Crossref deposit XML with structured references, with ORCIDs carried through to both."],
      ["AI-assisted editorial polish", "A recent addition that lowers the time cost of turning a messy Word manuscript into a clean galley, with a human editor reviewing every change."]
    ],
    stack: ["Python", "Pandoc", "JATS XML", "Crossref"],
    github: "https://github.com/justalewis/graphion", live: "",
    posts: [["Graphion: A Layout & Metadata Tool for Academic Journals", "2026-05-23", S + "graphion-a-layout-and-metadata-tool"]]
  },
  {
    slug: "stylometric-comparison", image: "img/stylometric-comparison.png", title: "Stylometric Comparison", year: 2026, status: "Live", plate: "red",
    tagline: "Profile two texts across fifteen stylistic features.",
    summary: "A Flask and spaCy tool that compares two writing samples and summarises the differences, built for talking with students about style and voice.",
    stack: ["Python", "Flask", "spaCy", "Fly.io"],
    github: "https://github.com/justalewis/Stylometric-Comparison-Tool", live: "https://stylometric-compare.fly.dev/",
    details: [
      ["The assignment", "In \"Stylometric Self-Portraits,\" a paired assignment for first-year composition, students use the tool to describe their own style in measurable terms. Phase 1 compares two pieces from different genres. Phase 2 compares an early research draft with its revision. Features include sentence-length distribution, sentence openers, and topic-sentence position."],
      ["Used as a diagnostic", "The tool also flags eight markers common in AI-generated prose and reports reading level, but the assignment frames these as diagnostic rather than a way to police AI use."],
      ["What happened in the pilot", "In a Spring 2026 pilot with 20 students, accessible metrics like topic-sentence position took hold, while the Latinate/Germanic ratio was harder to use. Profiles of students who relied on AI grammar tools clustered tightly."]
    ],
    posts: [
      ["Stylometrics: Talking with Students about Style and Voice", "2026-05-16", S + "stylometrics-talking-with-students"],
      ["Stylometric Self-Portraits: A Paired Assignment for Talking Style and Grammar with Students (WAC Clearinghouse, Continuing Experiments)", "2026-08", "https://wacclearinghouse.org/repository/collections/continuing-experiments/august-2026/creative-explorations/stylometric-self-portraits/"]
    ]
  },
  {
    slug: "crossref-auditor", title: "Crossref Deposit Auditor", year: 2026, status: "Open source", plate: "ink",
    tagline: "Audit and clean Crossref deposit XML before you submit.",
    summary: "Validates against the official Crossref XSD, flags scrape-induced problems (glued citations, malformed DOIs, repeat-author markers), and offers a Flask cleanup workflow with Crossref REST matching.",
    stack: ["Python", "Flask", "XSD", "Crossref API"],
    github: "https://github.com/justalewis/crossref-references-deposit-auditor", live: "",
    posts: [["New Tool: CrossRef References Deposit Auditor", "2026-05-09", S + "new-tool-crossref-references-deposit"]]
  },
  {
    slug: "janeway-refs-backfill", title: "Janeway Refs Backfill", year: 2026, status: "Open source", plate: "paper",
    tagline: "Citation lists for articles that don't render from JATS.",
    summary: "A Janeway plugin that contributes Crossref citation_list data for articles whose render galley isn't JATS XML.",
    stack: ["Python", "Janeway", "Crossref"],
    github: "https://github.com/justalewis/janeway-crossref-refs-backfill", live: "",
    posts: [
      ["Backfilling the Bibliographic Record in Writing Studies, Pt. 1", "2026-04-24", S + "backfilling-the-bibliographic-record"],
      ["Backfilling the Bibliographic Record in Writing Studies, Pt. 2", "2026-04-28", S + "backfilling-the-bibliographic-record-3de"]
    ]
  },
  {
    slug: "numismatic-tool", title: "Numismatic Tool", year: 2026, status: "Prototype", plate: "red",
    tagline: "AI coin grading from photographs.",
    summary: "Claude vision reads coin photos and grounds its grade in the Numista catalogue.",
    stack: ["Next.js", "TypeScript", "Claude API", "Numista API", "Fly.io"],
    github: "https://github.com/justalewis/numismatic-tool", live: "", posts: []
  },
  {
    slug: "wacc-doi-tool", title: "WAC DOI Tool", year: 2026, status: "Open source", plate: "ink",
    tagline: "Mint DOIs and add references, validated against Crossref's schemas.",
    summary: "Two steps: generate a metadata deposit that registers DOIs, then a resources-only deposit that binds a pasted Works Cited to an existing DOI. It deposits nothing and stores nothing; staff upload the XML.",
    stack: ["Python", "Flask", "Crossref XSD"],
    github: "https://github.com/justalewis/wacc-doi-tool", live: "", posts: []
  },
  {
    slug: "lewis-design-system", image: "img/lewis-design-system.png", title: "Lewis Design System", year: 2026, status: "Live", plate: "paper",
    tagline: "Portable CSS tokens with an editorial aesthetic.",
    summary: "One link tag gives any project the shared type, colour, and spacing tokens used across these tools.",
    stack: ["CSS", "Design tokens"],
    github: "https://github.com/justalewis/lewis-design-system", live: "https://justalewis.github.io/lewis-design-system/", posts: []
  }
];
window.SITE = { substack: "https://justalewis.substack.com", github: "https://github.com/justalewis", linkedin: "https://www.linkedin.com/in/justin-lewis-qualitative/" };
