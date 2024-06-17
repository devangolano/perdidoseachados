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
        className=" font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Principal
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className=" font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Documentos Perdido
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className=" font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
        Documentos Encontrado
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className=" font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Ajuda
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
    <MaterialNavbar className="mx-auto px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Achados & Perdidos
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={handleToggleNav}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </MaterialNavbar>
  );
}
