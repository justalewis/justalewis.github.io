// One entry per project. Add `image: "img/slug.png"` to replace the typographic plate with a screenshot.
const S = "https://justalewis.substack.com/p/";
window.PROJECTS = [
  {
    slug: "pinakes", image: "img/pinakes.png", title: "Pinakes", year: 2026, status: "Live", plate: "red",
    tagline: "A bibliometric index for Rhetoric & Composition.",
    summary: "Nearly 70 journals and more than 65,000 articles, drawn from CrossRef, OpenAlex, RSS feeds, and custom scrapers, then visualised as citation networks, co-citation graphs, and author timelines. Named for Callimachus's catalogue of the Library of Alexandria.",
    stack: ["Python", "Flask", "SQLite", "D3.js", "NetworkX", "Fly.io"],
    github: "https://github.com/justalewis/Rhet-Comp-Index", doi: "10.5281/zenodo.23600025", live: "https://pinakes.wacclearinghouse.org",
    posts: [
      ["Introducing Pinakes", "2026-03-17", S + "introducing-pinakes"],
      ["Pinakes Feature Release: OpenAlex Integration", "2026-03-19", S + "pinakes-feature-release-openalex"],
      ["On Monographs, Edited Collections and Scholarly Infrastructure", "2026-03-23", S + "on-monographs-edited-collections"],
      ["The (Partial) Shapes of Scholarly Careers", "2026-03-26", S + "the-partial-shapes-of-scholarly-careers"],
      ["A Session of Useful Miscellany", "2026-03-31", S + "a-session-of-useful-miscellany"],
      ["Twenty Ways to Look at a Discipline", "2026-04-07", S + "twenty-ways-to-look-at-a-discpline"],
      ["The Right to Erasure in Scholarly Indexes", "2026-06-16", S + "the-right-to-erasure-in-scholarly"]
    ]
  },
  {
    slug: "eunomias-labors", image: "img/eunomias-labors.png", title: "Eunomia's Labors", year: 2026, status: "Live", plate: "paper",
    tagline: "DOIs and reference lists for Rhet/Comp journals.",
    summary: "A free service that helps journals in rhetoric and composition register DOIs with Crossref and deposit the reference lists that belong to them, so the field's scholarship enters the citation record as a source and not only as a destination. A sister site to Pinakes.",
    stack: ["Crossref API", "Custom scrapers", "Crossref deposit XML", "Pinakes"],
    github: "", live: "https://eunomiaslabors.xyz", doi: "",
    details: [
      ["The problem", "A survey of 49 journals in rhetoric and composition and technical communication found 52,060 records registered with Crossref, of which 16,804 (a little under a third) carry deposited references. Twelve journals have no Crossref presence at all, and nine register DOIs but have deposited no reference lists. College English and CCC have no deposited citations for anything before 2000. Without those lists, every quantitative account of who cites whom in the field works from a record with the gaps already built in."],
      ["The labor", "Hand-keying twenty to forty references for every article in a back catalog is more than a volunteer editorial staff can absorb. Eunomia's Labors takes that work on: a scraper tuned to each journal's archive extracts the references, matches them to existing DOIs where possible, and produces a validated deposit file after a hand audit."],
      ["Two services", "For journals with no DOIs, help with Crossref membership, a suffix pattern, and minting DOIs across the back catalog in one batch; the journal keeps its own registrant information. For journals that have DOIs but no deposited citations, harvesting reference lists and attaching them to the existing records."],
      ["Results so far", "The process ran first on Literacy in Composition Studies, where reference lists now cover 138 of 191 Crossref records, then on four WAC Clearinghouse journals and Reflections. Together those six journals account for 1,185 articles and 31,053 deposited references, 14,680 of which resolve to a live DOI."]
    ],
    posts: [
      ["Eunomia's Labors", "2026-09-01", S + "eunomias-labors"],
      ["Backfilling the Bibliographic Record in Writing Studies, Pt. 1", "2026-04-24", S + "backfilling-the-bibliographic-record", true],
      ["Backfilling the Bibliographic Record in Writing Studies, Pt. 2", "2026-04-28", S + "backfilling-the-bibliographic-record-3de", true]
    ]
  },
  {
    slug: "wpa-l-archive", image: "img/wpa-l-archive.png", title: "WPA-L Archive Reader", year: 2026, status: "In development", plate: "ink",
    tagline: "A reader and research tools for the WPA-L listserv archive, 1993–2021.",
    summary: "186,436 messages from the Writing Program Administration list, rebuilt from the Internet Archive's deposit into a browsable, searchable archive with threaded views, a volume timeline, and research tools layered on top. Email addresses and attachments are stripped, and a withdrawal process lets people ask for their posts to be removed.",
    stack: ["Python", "Flask", "SQLite FTS5", "Jinja", "Fly.io"],
    github: "https://github.com/justalewis/wpa-l-archive", live: "https://wpa-l-archive.fly.dev/", doi: "",
    details: [
      ["The archive", "The corpus runs from January 1993 to May 2021 and is built from 341 monthly LISTSERV logs. Browse by year and month, read whole threads or single messages, and search by words or phrase with a matches-per-year histogram. Early threads are reconstructed from subject lines and reply attributions; from about 2010 onward, message headers link replies to their parents."],
      ["Research tools", "Beyond reading, the site adds views for volume over time, trends, events, topics, genres, people, participation, institutions, and cited works, plus a downloadable dataset. Every feature is regenerated from the build pipeline, and the human review decisions behind them are kept as plain files in the repository so they show up in diffs."],
      ["Ethics and privacy", "The site is built around the fact that these are people's posts. Poster identities are keyed by a salted hash rather than an address, withdrawal requests suppress a poster across every page, and the site asks search engines not to index it. It has an Ethics page and an opt-out form."],
      ["Where it stands", "Working draft. Page text on the site is still placeholder, and the project is under active development."]
    ],
    posts: []
  },
  {
    slug: "aletheia", image: "img/aletheia.png", title: "Aletheia", year: 2026, status: "Live", plate: "ink",
    tagline: "A course reader builder for open writing materials.",
    summary: "Open course readers for writing classes, assembled from openly licensed readings and assignments.",
    stack: ["Python", "Fly.io"],
    github: "https://github.com/justalewis/aletheia", doi: "10.5281/zenodo.23600017", live: "https://aletheia-oer.fly.dev",
    posts: [["Aletheia", "2026-10-18", S + "aletheia"]]
  },
  {
    slug: "sympraxi", title: "Sympraxi", year: 2026, status: "In development", plate: "red",
    tagline: "All-in-one writing center software, in development.",
    summary: "An open-source system for college writing centers that brings scheduling, session notes, online and asynchronous sessions, tutor hours and training, and a writing-resource library into one self-hostable tool. Built around student privacy and accessibility from the start.",
    stack: ["Python", "Django", "PostgreSQL", "HTMX", "Yjs", "Jitsi", "Docker"],
    github: "https://github.com/justalewis/sympraxi", doi: "10.5281/zenodo.23600051", live: "",
    pipeline: ["Foundation", "Scheduling core", "Online + async sessions", "Resource library", "Staff operations + training", "Campus integration (1.0)"],
    details: [
      ["What it does", "Tutors set weekly hours and students book through a list-first scheduler with limits, group and repeating appointments, and confirmation emails with calendar files. After each session a tutor writes a summary for the student and notes for staff, tags topics, and attaches resources from a starter catalog. Students see their own sessions on a My writing page."],
      ["Privacy and records", "Session notes are treated as FERPA education records. Access is scoped by role and center, reads are logged in an append-only audit log, staff sign-in requires two-factor authentication, and finalised records change only through amendments."],
      ["Accessibility", "Server-rendered pages with accessible base templates, with accessibility documentation kept in the repository alongside the build plan."],
      ["Where it stands", "The foundation phase is scaffolded and the scheduling core and session records are built. The roadmap runs through online and asynchronous sessions, the resource library and long-term tracking, staff operations and training, and campus integration (single sign-on, LTI, API) for 1.0. A pilot is planned for summer 2027. Code is AGPL-3.0-or-later; the topic vocabulary and catalog metadata are CC0."]
    ],
    posts: []
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
    github: "https://github.com/justalewis/graphion", doi: "10.5281/zenodo.23600039", live: "",
    posts: [["Graphion: A Layout & Metadata Tool for Academic Journals", "2026-05-23", S + "graphion-a-layout-and-metadata-tool"]]
  },
  {
    slug: "stylometric-comparison", image: "img/stylometric-comparison.png", title: "Stylometric Comparison", year: 2026, status: "Live", plate: "red",
    tagline: "Profile two texts across fifteen stylistic features.",
    summary: "A Flask and spaCy tool that compares two writing samples and summarises the differences, built for talking with students about style and voice.",
    stack: ["Python", "Flask", "spaCy", "Fly.io"],
    github: "https://github.com/justalewis/Stylometric-Comparison-Tool", doi: "10.5281/zenodo.23600029", live: "https://stylometric-compare.fly.dev/",
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
    github: "https://github.com/justalewis/crossref-references-deposit-auditor", doi: "10.5281/zenodo.23600031", live: "",
    posts: [["New Tool: CrossRef References Deposit Auditor", "2026-05-09", S + "new-tool-crossref-references-deposit"]]
  },
  {
    slug: "janeway-refs-backfill", title: "Janeway Refs Backfill", year: 2026, status: "Open source", plate: "paper",
    tagline: "Citation lists for articles that don't render from JATS.",
    summary: "A Janeway plugin that contributes Crossref citation_list data for articles whose render galley isn't JATS XML.",
    stack: ["Python", "Janeway", "Crossref"],
    github: "https://github.com/justalewis/janeway-crossref-refs-backfill", doi: "10.5281/zenodo.23600044", live: "",
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
    github: "https://github.com/justalewis/numismatic-tool", doi: "10.5281/zenodo.23600049", live: "", posts: []
  },
  {
    slug: "wacc-doi-tool", title: "WAC DOI Tool", year: 2026, status: "Open source", plate: "ink",
    tagline: "Mint DOIs and add references, validated against Crossref's schemas.",
    summary: "Two steps: generate a metadata deposit that registers DOIs, then a resources-only deposit that binds a pasted Works Cited to an existing DOI. It deposits nothing and stores nothing; staff upload the XML.",
    stack: ["Python", "Flask", "Crossref XSD"],
    github: "https://github.com/justalewis/wacc-doi-tool", doi: "10.5281/zenodo.23600053", live: "", posts: []
  }
];
window.SITE = { substack: "https://justalewis.substack.com", github: "https://github.com/justalewis", linkedin: "https://www.linkedin.com/in/justin-lewis-qualitative/" };
