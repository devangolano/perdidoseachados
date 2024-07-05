import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { Carrocel } from "./components/Carrocel";

function App() {
  return (
    <>
      <Navbar />
      <Carrocel />
      <div className="mt-12 max-w-screen-xl mx-auto px-4">
        <div className="grid gap-y-10 gap-x-4 grid-cols-1 md:grid-cols-4 justify-items-center">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
