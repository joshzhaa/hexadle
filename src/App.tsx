import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GuessTable } from "@/features/guess-table";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hexadle</h1>
      <div>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <GuessTable />
      </div>
    </>
  );
}

export default App;
