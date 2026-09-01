# tatiarazmadze.com

Personal site — a status page for what I run, with one deep-dive on reviewing agent output.

Static HTML and CSS. No framework, no build step, no dependencies. Served from GitHub Pages,
published by `.github/workflows/deploy.yml`, which also stamps the deploying commit, timestamp and
build duration into the header — the only live data on the page.

## Structure

| File | What it is |
|---|---|
| `index.html` | The status board, changelog, and colophon |
| `agent-log.html` | The deep-dive: an agent finding I overrode, and one it caught |
| `styles.css` | Everything visual. Light and dark via `prefers-color-scheme` |
| `app.js` | Six lines. Collapses the `<details>` elements that ship open |

## Design rules

- **The absence rule.** A component appears only if it resolves to a specific number or a named
  decision. No adjectives, no skill percentages.
- **No fake instruments.** Nothing gets a status indicator unless it is actually measured. The deploy
  line is measured; nothing else is, so nothing else has one.
- **Progressive enhancement.** Components ship `open` in the markup and JavaScript collapses them.
  With JS disabled or broken the page is a complete document, never a row of empty boxes.
- **The phone is the design.** Not a fallback.

## To do

- [ ] ~~`resume.pdf`~~ — done
- [ ] Swap the Agent Log prose for the real redacted transcript, and name the specific IAM action
- [ ] Custom domain once DNS and the certificate are clean
- [ ] Optional: migrate to S3 + CloudFront + Terraform, and write that up as a case study
