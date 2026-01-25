const GREEN = "3FA34D";
const YELLOW = "FFD639";
const WHITE = "FFFFFF";

// Compares guess to target, returns appropriate background colors
function evaluate(guess: string[], target: string[]): string[] {
  const targetCharCounts = new Map();

  const backgrounds = Array(6).fill(WHITE)
  // 1st pass colors greens
  for (let i = 0; i < 6; i++) {
    if (guess[i] == target[i]) {
      backgrounds[i] = GREEN
    } else {
      // count up char counts for second pass
      const char = target[i]
      targetCharCounts.set(char, (targetCharCounts.get(char) || 0) + 1);
    }
  }

  // 2nd pass colors yellows
  for (let i = 0; i < 6; i++) {
    if (backgrounds[i] == GREEN) continue;

    const char = guess[i]
    if (targetCharCounts.has(char) && targetCharCounts.get(char) > 0) {
      backgrounds[i] = YELLOW
      targetCharCounts.set(char, targetCharCounts.get(char) - 1)
    }
  }

  return backgrounds;
}

export { evaluate };
