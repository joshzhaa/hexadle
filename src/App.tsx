import { GuessTable } from "@/features/guess-table";

function App() {
  return (
    <>
      <h1>Hexadle</h1>
      <div className="flex">
        <GuessTable className="w-64" />
      </div>
    </>
  );
}

export default App;
