# Monokai Dark by Mathieu42

<p align="center">
  <img src="resources/logo-128x128.png" width="128" alt="Monokai Dark by Mathieu42 logo">
</p>

A complete, dark and minimalistic Monokai-inspired color theme for [Visual Studio Code](https://code.visualstudio.com) and [Cursor](https://cursor.com).

By [Mathieu Lopes](https://www.mathieu42.com) ([Mathieu42](https://www.mathieu42.com)).

## Features

- **Complete** — Broad UI coverage, including chat, inline edits, and sticky scroll.
- **Dark** — Darker than classic Monokai; grayscale base with selective accent colors.
- **Minimal** — Fewer visual borders; calm contrast for long coding sessions.
- **Semantic highlighting** — LSP-aware colors for TypeScript, JavaScript, Rust, and other semantic-token languages.

## Supported languages

Syntax highlighting works across VS Code language grammars. Semantic highlighting improves the experience for:

- TypeScript / JavaScript / JSX / TSX
- Rust
- Python, Go, Java, C#, C/C++
- JSON, YAML, Markdown, HTML, CSS / SCSS
- Shell, SQL, and other TextMate-backed languages

## Tested on

- **Visual Studio Code** 1.85+ (minimum engine)
- **Cursor** (current stable, May 2026)

## Installation

### Marketplace

Search for **Monokai Dark by Mathieu42** (publisher: **mathieu42**).

### Open VSX

For Cursor, VSCodium, and other Open VSX–compatible editors:

```bash
ovsx install mathieu42.monokai-dark-by-mathieu42
```

Or browse [Open VSX](https://open-vsx.org/extension/mathieu42/monokai-dark-by-mathieu42) after the first publish.

### VSIX

Download a `.vsix` from [GitHub Releases](https://github.com/MathieuLopes/vscode-monokai-dark-by-mathieu42/releases), then **Extensions: Install from VSIX…**.

### From source

```bash
git clone https://github.com/MathieuLopes/vscode-monokai-dark-by-mathieu42.git
cd vscode-monokai-dark-by-mathieu42
npm run dev
```

The dev scripts resolve the editor CLI automatically on macOS (even when `cursor` / `code` is not on your PATH). You can also install the shell command from the editor:

- Cursor: **Shell Command: Install 'cursor' command in PATH**
- VS Code: **Shell Command: Install 'code' command in PATH**

## Usage

**Preferences: Color Theme** → **Monokai Dark by Mathieu42**

## Development

| Command | Description |
|---------|-------------|
| `npm run dev` | Launch Cursor with the theme loaded |
| `npm run dev:vscode` | Launch VS Code with the theme loaded |
| `npm run dev:demo` | Open sample files for screenshot / QA |
| `npm run package` | Build a `.vsix` locally |
| `npm run publish` | Publish to the VS Code Marketplace |
| `npm run publish:openvsx` | Publish to Open VSX |

Refresh Marketplace screenshots:

```bash
bash scripts/refresh-screenshots.sh
```

## Screenshots

![Simple](resources/demo-simple.png)

![Advanced](resources/demo-advanced.png)

Sample sources: `resources/samples/demo-simple.ts`, `resources/samples/demo-advanced.ts`.

## Links

- Website: [mathieu42.com](https://www.mathieu42.com)
- Repository: [vscode-monokai-dark-by-mathieu42](https://github.com/MathieuLopes/vscode-monokai-dark-by-mathieu42)

## License

MIT — see [LICENSE](LICENSE).
