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
    console.log(event.key);
    const key = event.key.toUpperCase();
    if (!(key in AllowedInputs)) {
      return;
    }
    // INVARIANT: guesses.length >= 1
    let last = guesses[guesses.length - 1];
    if (last.length < 6) {
      last += key;
    } else {
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
