#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cat <<'EOF'
Refresh Marketplace screenshots
===============================

1. Run: npm run dev:demo
2. In the Extension Development Host window:
   - Preferences: Color Theme → Monokai Dark by Mathieu42
   - Open resources/samples/demo-simple.ts → capture as resources/demo-simple.png
   - Open resources/samples/demo-advanced.ts → capture as resources/demo-advanced.png
3. Recommended: hide side bar (Cmd+B), zoom 0 for consistent framing.
4. Replace PNGs in resources/ and commit.

EOF

exec bash "$ROOT/scripts/dev.sh" cursor \
  "$ROOT/resources/samples/demo-simple.ts" \
  "$ROOT/resources/samples/demo-advanced.ts"
