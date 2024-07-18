import Card from "./Card";

export default function Header(){
    return(
        <header className="bg-black/95 text-white h-full pt-28 md:pt-36 py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold titulo mb-1">Você perdeu seus documentos?</h1>
          <h1 className="text-4xl font-bold titulo mb-4">Pesquise aqui!!</h1>
          <p className="text-lg mb-8">Se você encontrou algum documento na via pública por favor cadastre na nossa plataforma.</p>
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Buscar com nome ou número de identif..."
              className="w-full md:w-1/3 px-4 py-3 text-md rounded-l-full focus:outline-none text-black"
            />
            <button className="bg-white text-black px-6 py-3 rounded-r-full hover:bg-purple-200 hover:text-white">Buscar</button>
           </div>
        </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-2">
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           </div>
      </header>
     );
}