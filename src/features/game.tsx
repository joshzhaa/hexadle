import { useCallback, useEffect, useState } from "react";
import { GuessTable } from "@/features/guess-table";
import { ColorBlock } from "@/components/color-block";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { CircleQuestionMark, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const NUM_GUESSES = 7;
const INITIAL_GUESS_ARRAY = Array(NUM_GUESSES).fill("");

const hasEmptySpace = (str: string): boolean => {
  return str.length != 6;
};

function Game() {
  const [guesses, setGuesses] = useState(INITIAL_GUESS_ARRAY);
  const [targetColor, setTargetColor] = useState("A8C1EE");

  const handleKey = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      if (!AllowedInputs.has(key)) {
        return;
      }

      const activeGuessIndex = guesses.findIndex(hasEmptySpace);
      console.log(activeGuessIndex);
      let activeGuess = guesses[activeGuessIndex];
      console.log(activeGuess);

      if (key == "BACKSPACE") {
        activeGuess = activeGuess.slice(0, activeGuess.length - 1);
      } else {
        activeGuess += key;
      }

      setGuesses(
        guesses.map((element, i) => {
          if (i == activeGuessIndex) {
            return activeGuess;
          }
          return element;
        }),
      );
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
      <GameHeader
        targetColor={targetColor}
        setTargetColor={setTargetColor}
        setGuesses={setGuesses}
      />
      <div className="flex items-center justify-center">
        <GuessTable colors={guesses} target={targetColor} />
      </div>
    </>
  );
}

interface GameHeaderProps {
  targetColor: string;
  setTargetColor: (color: string) => void;
  setGuesses: (guesses: string[]) => void;
}

const randomHex = (): string =>
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0")
    .toUpperCase();

function GameHeader({
  targetColor,
  setTargetColor,
  setGuesses,
}: GameHeaderProps) {
  console.log(randomHex());
  return (
    <h1 className="flex items-center justify-center">
      <HoverCard openDelay={1} closeDelay={100}>
        <HoverCardTrigger>
          <Button
            onClick={() => {
              setTargetColor(randomHex());
              setGuesses(INITIAL_GUESS_ARRAY);
            }}
            className="size-12"
          >
            <RefreshCw className="size-5" />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="flex">
          <div>New color</div>
        </HoverCardContent>
      </HoverCard>

      <ColorBlock color={targetColor} className="size-20 m-8" />
      <HoverCard openDelay={1} closeDelay={100}>
        <HoverCardTrigger>
          <Button className="size-12">
            <CircleQuestionMark className="size-5" />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent>What is this color's hex code?</HoverCardContent>
      </HoverCard>
    </h1>
  );
}

export { Game };
