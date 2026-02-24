import { useCallback, useEffect, useState } from "react";
import { CircleQuestionMark, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { ColorBlock } from "@/components/color-block";
import { GuessTable } from "@/features/guess-table";
import { VictoryAlert, LossAlert } from "@/features/victory-loss";
import { randomHex } from "@/lib/random";

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
  const [targetColor, setTargetColor] = useState(randomHex());

  const handleKey = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      if (!AllowedInputs.has(key)) {
        return;
      }

      const activeGuessIndex = guesses.findIndex(hasEmptySpace);
      let activeGuess = guesses[activeGuessIndex];

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
      <div>
        <GuessTable colors={guesses} target={targetColor} />
        <VictoryAlert />
      </div>
    </>
  );
}

interface GameHeaderProps {
  targetColor: string;
  setTargetColor: (color: string) => void;
  setGuesses: (guesses: string[]) => void;
}

function GameHeader({
  targetColor,
  setTargetColor,
  setGuesses,
}: GameHeaderProps) {
  return (
    <h1 className="flex items-center justify-center">
      <HoverCard openDelay={1} closeDelay={100}>
        <HoverCardTrigger>
          <Button
            onClick={() => {
              setTargetColor(randomHex());
              setGuesses(INITIAL_GUESS_ARRAY);
            }}
            className="size-12 bg-[#F1F1F1] border-[#CCCCCC] border-2 dark"
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
          <Button className="size-12 bg-[#FAFAFA] border-[#CCCCCC] border-2 dark">
            <CircleQuestionMark className="size-5" />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent>What is this color's hex code?</HoverCardContent>
      </HoverCard>
    </h1>
  );
}

export { Game };
