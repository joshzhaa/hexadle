import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import { Item } from "@/components/ui/item";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hexadle</h1>
      <div>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Item> </Item>
      </div>
    </>
  );
}

export default App;
