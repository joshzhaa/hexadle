import { useEffect, useState } from "react";
import { GuessTable } from "@/features/guess-table";

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

  const handleKey = (event: KeyboardEvent) => {
    const key = event.key.toUpperCase();
    if (!AllowedInputs.has(key)) {
      return;
    }
    // INVARIANT: guesses.length >= 1
    let last = guesses[guesses.length - 1];
    if (last.length < 6) {
      last += key;
      setGuesses(guesses.slice(0, guesses.length - 1).concat(last));
    } else {
      setGuesses(guesses.concat(key));
    }
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
      <div className="flex">
        <GuessTable className="w-64" colors={guesses} />
      </div>
    </>
  );
}

export { Game };
