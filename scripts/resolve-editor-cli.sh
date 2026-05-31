#!/usr/bin/env bash
# Resolves cursor or code CLI when not on PATH (common on macOS).

resolve_cli() {
  local name="$1"

  if command -v "$name" >/dev/null 2>&1; then
    command -v "$name"
    return 0
  fi

  local candidate=""
  case "$(uname -s)" in
    Darwin)
      case "$name" in
        cursor)
          candidate="/Applications/Cursor.app/Contents/Resources/app/bin/cursor"
          ;;
        code)
          candidate="/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code"
          ;;
      esac
      ;;
    Linux)
      case "$name" in
        cursor)
          candidate="${CURSOR_CLI:-$HOME/.local/bin/cursor}"
          ;;
        code)
          candidate="${CODE_CLI:-/usr/bin/code}"
          ;;
      esac
      ;;
  esac

  if [[ -n "$candidate" && -x "$candidate" ]]; then
    echo "$candidate"
    return 0
  fi

  return 1
}
