import { Game } from "@/features/game";
import { ColorBlock } from "./components/color-block";

function App() {
  return (
    <>
      <h1>Hexadle</h1>
      <Game />
      <ColorBlock color="123456" className="w-64 h-64" />
      <ColorBlock color="523456" className="w-64 h-64" />
    </>
  );
}

export default App;
