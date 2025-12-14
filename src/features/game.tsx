import { GuessTable } from "./guess-table";
import { useEffect, useState } from "react";

function Game() {
  const [guesses, setGuesses] = useState(["124456", "1234AF", "654321"])

  const handleKey = (event: KeyboardEvent) => {
    console.log(event.key)
  }

  const listenEvents = () => {
    window.addEventListener("keydown", handleKey)
    return () => {
      window.removeEventListener("keydown", handleKey)
    }
  }

  useEffect(listenEvents, [handleKey])
  return <>
      <div className="flex">
        <GuessTable className="w-64" colors={guesses}/>
      </div>
  </>
}

export { Game }
