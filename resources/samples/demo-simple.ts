/**
 * Simple demo — syntax basics for Marketplace screenshots.
 * Open with: npm run dev:demo
 */

const greeting = "Monokai Dark by Mathieu42";

/** Greets the user with a formatted message. */
function greet(name: string, excited = false): string {
  const suffix = excited ? "!" : ".";
  return `${greeting}: hello, ${name}${suffix}`;
}

const count = 42;
const enabled = true;
const pattern = /^[a-z]+$/;

export interface ThemeMeta {
  readonly name: string;
  version: number;
}

class ThemePreview implements ThemeMeta {
  readonly name = greeting;

  constructor(public version: number) {}

  describe(): string {
    return greet(this.name, this.version >= 1);
  }
}

export const preview = new ThemePreview(1);
console.log(preview.describe());
