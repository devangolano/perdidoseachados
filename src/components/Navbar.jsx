import React from "react";
import {
  Navbar as MaterialNavbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <a href="#" className="flex items-center pl-5 hover:text-blue-500 transition-colors">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-medium lg:border-l lg:border-gray-300"
      >
        <a href="#" className="flex items-center pl-5 hover:text-blue-500 transition-colors">
          Achei um Documento
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-medium lg:border-l lg:border-gray-300"
      >
        <a href="#" className="flex items-center pl-5 hover:text-blue-500 transition-colors">
          Perdi um Documento
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-medium lg:border-l lg:border-gray-300"
      >
        <a href="#" className="flex items-center pl-5 hover:text-blue-500 transition-colors">
          Procurar um Documento
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-medium lg:border-l lg:border-gray-300"
      >
        <a href="#" className="flex items-center px-4 hover:text-blue-500 transition-colors">
          Contato
        </a>
      </Typography>
    </ul>
  );
}

export default function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleToggleNav = () => {
    setOpenNav(!openNav);
  };

  const handleWindowResize = () => {
    if (window.innerWidth >= 960) {
      setOpenNav(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <MaterialNavbar className="mx-auto px-3 py-0">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          <img className="w-24" src="/Logo.png" alt="Logo" />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-16 w-16 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={handleToggleNav}
        >
          {openNav ? (
            <XMarkIcon className="h-8 w-8" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-8 w-8" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </MaterialNavbar>
  );
}
