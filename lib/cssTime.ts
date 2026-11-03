// Reads a duration token from :root in milliseconds.
// The production CSS minifier rewrites "220ms" as ".22s", so both units are handled.
export function cssTimeMs(name: string, fallback: number): number {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const n = parseFloat(v);
  if (Number.isNaN(n)) return fallback;
  if (v.endsWith('ms')) return n;
  if (v.endsWith('s')) return n * 1000;
  return n;
}
