import { useCallback, useEffect, useState } from "react";
import { GuessTable } from "@/features/guess-table";
import { ColorBlock } from "@/components/color-block";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { CircleQuestionMark, RefreshCw } from "lucide-react";

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
  const [targetColor, setTargetColor] = useState("A8C1EE");

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
  setTargetColor: (color: string) => void;
}

const randomHex = (): string =>
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");

function GameHeader({ targetColor, setTargetColor }: GameHeaderProps) {
  console.log(randomHex());
  return (
    <h1 className="flex items-center justify-center">
      <HoverCard openDelay={1} closeDelay={100}>
        <HoverCardTrigger>
          <button onClick={() => setTargetColor(randomHex())}>
            <RefreshCw />
          </button>
        </HoverCardTrigger>
        <HoverCardContent className="flex">
          <div>Is it time to get a new color?</div>
        </HoverCardContent>
      </HoverCard>

      <ColorBlock color={targetColor} className="size-26 p-3.5" />

      <HoverCard openDelay={1} closeDelay={100}>
        <HoverCardTrigger>
          <CircleQuestionMark />
        </HoverCardTrigger>
        <HoverCardContent>What is this color's hex code?</HoverCardContent>
      </HoverCard>
    </h1>
  );
}

export { Game };
