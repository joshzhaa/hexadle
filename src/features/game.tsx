import { useCallback, useEffect, useState } from "react";
import { GuessTable } from "@/features/guess-table";
import { ColorBlock } from "@/components/color-block";
import { CircleQuestionMark } from "lucide-react";

const AllowedInputs = new Set([
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "BACKSPACE",
]);

function Game() {
  const [guesses, setGuesses] = useState([""]);
  const [targetColor] = useState("A8C1EE");

  const handleKey = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      if (!AllowedInputs.has(key)) {
        return;
      }
      // INVARIANT: guesses.length >= 1
      let last = guesses[guesses.length - 1];

      if (key == "BACKSPACE") {
        last = last.slice(0, last.length - 1);
      } else {
        last += key;
      }

      const newGuesses = guesses.slice(0, guesses.length - 1).concat(last);
      if (newGuesses[guesses.length - 1].length == 6) {
        // maintain invariant for next call
        newGuesses.push("");
      }
      setGuesses(newGuesses);
    },
    [guesses],
  );

  const listenEvents = () => {
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  };

  useEffect(listenEvents, [handleKey]);

  return (
    <>
      <GameHeader targetColor={targetColor} />
      <div className="flex items-center justify-center">
        <GuessTable colors={guesses} target={targetColor} />
      </div>
    </>
  );
}

interface GameHeaderProps {
  targetColor: string;
}

function GameHeader({ targetColor }: GameHeaderProps) {
  return (
    <h1 className="flex items-center justify-center">
      <ColorBlock color={targetColor} className="size-26 p-3" />
      <CircleQuestionMark />
    </h1>
  );
}

export { Game };
