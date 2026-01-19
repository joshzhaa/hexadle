const GREEN = "3FA34D";
const YELLOW = "FFD639";
const WHITE = "FFFFFF";

// Compares guess to target, returns appropriate background colors
function evaluate(guess: string[], target: string[]): string[] {
  const targetCharCounts = new Map();
  for (const char of target) {
    targetCharCounts.set(char, (targetCharCounts.get(char) || 0) + 1);
  }

  return guess.map((char: string, i: number) => {
    if (!targetCharCounts.has(char) || targetCharCounts.get(char) <= 0)
      return WHITE;
    targetCharCounts.set(char, targetCharCounts.get(char) - 1);
    return char == target[i] ? GREEN : YELLOW;
  });
}

export { evaluate };
