import { useEffect, useState } from "react";
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
]);

function Game() {
  const [guesses, setGuesses] = useState([""]);
  const [targetColor, _] = useState("A8C1EE");

  const handleKey = (event: KeyboardEvent) => {
    const key = event.key.toUpperCase();
    if (!AllowedInputs.has(key)) {
      return;
    }
    // INVARIANT: guesses.length >= 1
    let last = guesses[guesses.length - 1];
    last += key;
    const newGuesses = guesses.slice(0, guesses.length - 1).concat(last);
    if (newGuesses[guesses.length - 1].length == 6) {
      newGuesses.push("");
    }
    setGuesses(newGuesses);
  };

  const listenEvents = () => {
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  };

  useEffect(listenEvents, [handleKey]);

  return (
    <>
      <h1 className="flex items-center justify-center">
        <ColorBlock color={targetColor} className="size-26 p-3" />
        <CircleQuestionMark />
      </h1>
      <div className="flex items-center justify-center">
        <GuessTable colors={guesses} target={targetColor} />
      </div>
    </>
  );
}

export { Game };
