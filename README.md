# tatiarazmadze.com

Personal site — a status page for what I run, with one deep-dive on reviewing agent output.

Static HTML and CSS. No framework and no build step. One external dependency: Fraunces from Google Fonts, loaded with `display=swap` and a serif fallback, so text renders immediately whether or not the font arrives. Served from GitHub Pages,
published by `.github/workflows/deploy.yml` on every push to `main`, authenticating with GitHub OIDC
(no stored credentials).

## Structure

| File | What it is |
|---|---|
| `index.html` | The status board, changelog, and colophon |
| `agent-log.html` | The deep-dive: an agent finding I overrode, and one it caught |
| `styles.css` | Everything visual. Warm paper palette, light and dark via `prefers-color-scheme` |
| `og.html` / `og.png` | Source and output for the social preview card, rendered with headless Chrome |
| `favicon.svg` | Tab mark |
| `app.js` | Six lines. Collapses the `<details>` elements that ship open |

## Design rules

- **The absence rule.** A component appears only if it resolves to a specific number or a named
  decision. No adjectives, no skill percentages.
- **No fake instruments.** Nothing on the page carries a status indicator, because nothing on it is
  being measured.
- **Progressive enhancement.** Components ship `open` in the markup and JavaScript collapses them.
  With JS disabled or broken the page is a complete document, never a row of empty boxes.
- **The phone is the design.** Not a fallback.

## Design rules, continued

- **The numbers carry the design.** Metrics are set in the display face at ~1.7rem, not in body copy. They are the most persuasive objects on the page.
- **Warm paper, not white.** `#f7f3ec`. A white page reads clinical; this one reads like something printed.

## To do

- [ ] - [ ] Swap the Agent Log prose for the real redacted transcript, and name the specific IAM action
- [ ] Custom domain once DNS and the certificate are clean
- [ ] Optional: migrate to S3 + CloudFront + Terraform, and write that up as a case study
