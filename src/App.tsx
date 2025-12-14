import { GuessTable } from "@/features/guess-table";
import { ColorBlock } from "@/components/color-block";

function App() {
  const guesses = ["124456", "1234AF", "654321"]
  return (
    <>
      <h1>Hexadle</h1>
      <div className="flex">
        <GuessTable className="w-64" colors={guesses}/>
      </div>
      <ColorBlock color="123456" className="w-64 h-64" />
      <ColorBlock color="523456" className="w-64 h-64" />
    </>
  );
}

export default App;
