#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CLI_NAME="${1:?Editor CLI name required (cursor or code)}"
shift || true

# shellcheck source=scripts/resolve-editor-cli.sh
source "$ROOT/scripts/resolve-editor-cli.sh"

if ! CLI="$(resolve_cli "$CLI_NAME")"; then
  cat >&2 <<EOF
Error: '$CLI_NAME' CLI not found.

Install the shell command from the editor:
  Cursor:  Command Palette → "Shell Command: Install 'cursor' command in PATH"
  VS Code: Command Palette → "Shell Command: Install 'code' command in PATH"

Or set CURSOR_CLI / CODE_CLI to the full path of the binary.
EOF
  exit 1
fi

exec "$CLI" --extensionDevelopmentPath "$ROOT" "$@"
