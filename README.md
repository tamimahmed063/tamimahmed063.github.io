# Personal website

Each page is a `.md` file (`index.md`, `research/research.md`, `cv/cv.md`,
`publication/publication.md`, `beyond-the-books/beyond-the-book.md`); Jekyll still builds
each one to the same `.html` URL it always had, so no links changed. The content itself
is raw HTML, not Markdown prose — these pages are structural (tables, nested spans, an
iframe, a video), not article text, so there's nothing to write in Markdown syntax.

The shared header, navigation, footer, and "back to top" button live once in
`_layouts/default.html`. Each page file only contains its own unique content plus a
front-matter block at the top (`layout`, `title`, and an optional `extra_script` for
page-specific `<script>` tags).

Site styling and shared behavior remain in `styles.css` and `main.js`.

Run a local preview with:

```sh
make serve
```

Run a one-time build check with:

```sh
make build
```
