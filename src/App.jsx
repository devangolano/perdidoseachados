import Navbar from "./components/Navbar"
import Card from "./components/Card"

function App() {

  return (
    <>
    <Navbar />
   <div className="mt-12 grid gap-y-10 gap-x-3 grid-cols-1 md:grid-cols-3 px-7">
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   </div>
    </>
  )
}

export default App
