/**
 * Advanced demo — semantic highlighting, LSP symbols, and UI-adjacent code.
 * Open with: npm run dev:demo
 */


type ThemeId = "monokai-dark-by-mathieu42";
type LogLevel = "debug" | "info" | "warn" | "error";

interface TokenRule {
  readonly scope: string | string[];
  foreground?: string;
  fontStyle?: string;
}

enum HighlightKind {
  Keyword = "keyword",
  Type = "type",
  Function = "function",
}

namespace ThemeEngine {
  export const SEMANTIC_ENABLED = true;

  export async function loadRules(path: string): Promise<TokenRule[]> {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load theme rules from ${path}`);
    }
    return response.json() as Promise<TokenRule[]>;
  }

  export function mergeSemantic(
    base: TokenRule[],
    semantic: Record<string, string>,
  ): TokenRule[] {
    return [
      ...base,
      ...Object.entries(semantic).map(([scope, foreground]) => ({
        scope,
        foreground,
      })),
    ];
  }
}

abstract class BaseLogger {
  protected constructor(protected readonly level: LogLevel) {}

  abstract log(message: string): void;
}

class ConsoleLogger extends BaseLogger {
  #deprecatedField = "legacy";

  /** @deprecated Use structured logging instead. */
  log(message: string): void {
    if (this.level === "error") {
      console.error(`[${this.level}] ${message}`);
      return;
    }
    console.log(`[${this.level}] ${message}`);
  }

  static create(level: LogLevel = "info"): ConsoleLogger {
    return new ConsoleLogger(level);
  }
}

const themeId: ThemeId = "monokai-dark-by-mathieu42";
const logger = ConsoleLogger.create("debug");
const rules = await ThemeEngine.loadRules(`/themes/${themeId}.json`);
const merged = ThemeEngine.mergeSemantic(rules, {
  [HighlightKind.Function]: "#A6E22E",
  [HighlightKind.Type]: "#66D9EF",
});

logger.log(`Loaded ${merged.length} rules for ${themeId}`);

export { ConsoleLogger, merged, themeId };

