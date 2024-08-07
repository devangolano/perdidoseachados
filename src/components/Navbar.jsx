
const Navbar = () => {
  return (
    <nav className="fixed w-screen bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-end md:items-center px-4">
        <img
          src="https://t3.ftcdn.net/jpg/05/09/17/46/360_F_509174694_a8jxmbhzeDgJOu0VYNQwDZC61xjZWCtJ.jpg"
          alt="Logo"
          className="h-10 md:h-12"
        />
        <div className="hidden md:flex ml-10 space-x-4">
          <a href="#" className="text-gray-800 hover:text-purple-600">Principal</a>
          <a href="#" className="text-gray-800 hover:text-purple-600">Perdidos</a>
          <a href="#" className="text-gray-800 hover:text-purple-600">Encontrados</a>
          <a href="#" className="text-gray-800 hover:text-purple-600">Contactos</a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-800 hover:text-purple-600">
            <i className="far fa-comment-dots"></i>
          </button>
          <button className="text-gray-800 hover:text-purple-600">
            <i className="far fa-bell"></i>
          </button>
          <div className="relative">
            <img
              src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              alt="Profile"
              className="h-10 w-10 rounded-full"
            />
            <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-green-400"></span>
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
            Cadastrar Doc
          </button>
        </div>
        <div className="md:hidden flex items-end">
          <div className='flex items-center ml-6 justify-between gap-1'>
          <input
            type="text"
            placeholder="Procurar..."
            className="w-full px-2 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button onClick={() => alert("Buscando documento")} className="bg-purple-600 text-white px-3 py-2 rounded-full hover:bg-purple-700">
            Buscar
          </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
