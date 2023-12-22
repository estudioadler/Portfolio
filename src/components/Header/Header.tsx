"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { Copyright, X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = (event: React.MouseEvent) => {
    setShowMenu(!showMenu);
  };

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Sobre", link: "/about" },
    { label: "Projetos", link: "/projects" },
    { label: "Skills", link: "/skills" },
    { label: "Contato", link: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center w-full h-20 md:h-28 font-sora">
      {/* logotipo */}
      <Link href={"#"} >
      <div className="flex gap-2 items-center text-xs text-neutral-500">
        <Copyright size={18} />
        Adler Gabriel
      </div>
      </Link>
      {/* botao do menu */}
      <Link
        href={"#"}
        onClick={toggleMenu}
        className="group p-4 rounded-full bg-transparent hover:bg-neutral-100"
      >
        <div className="grid grid-cols-2 gap-1 group-hover:transform group-hover:-rotate-90 transition ease-in-out duration-300">
          <span className="w-1 h-1 bg-neutral-900 rounded-full"></span>
          <span className="w-1 h-1 bg-neutral-900 rounded-full"></span>
          <span className="w-1 h-1 bg-neutral-900 rounded-full"></span>
          <span className="w-1 h-1 bg-neutral-900 rounded-full"></span>
        </div>
      </Link>









      {/* menu aberto */}
      <nav
        className={`py-6 px-6 md:py-10 md:px-10 w-screen md:w-1/3 h-screen fixed top-0 right-0 z-50 bg-neutral-900 menu-animado ${showMenu ? "show" : ""}`}

      >


        {/* botao close */}

        <Link
          href={"#"}
          onClick={toggleMenu}
          className="text-neutral-100 bg-neutral-900 absolute top-4 md:top-8 right-3.5 md:right-16 p-3.5 rounded-full hover:bg-neutral-800 active:bg-neutral-700"
        >
            <X size={18} weight="regular" />
        </Link>

        {/* links do menu */}

        <div className="flex flex-col items-start gap-12 py-12 px-6">
          <div className="w-full border-b border-neutral-700 pb-4">
            <span className=" text-[0.625rem] text-neutral-400 uppercase">navegação</span>
          </div>
          <ul className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="text-4xl text-neutral-100 uppercase font-sans"
              >
                <Link
                  href={item.link}
                  className="flex gap-2 group"
                >
                  {item.label}
                  <ArrowUpRight size={16} className="hidden group-hover:flex"/>
                </Link>
              </li>
            ))}
          </ul>


          {/* links do menu */}
          
          <div className="w-full flex flex-col justify-between gap-8 text-neutral-100">
          <div className="w-full border-b border-neutral-700 pb-4">
            <span className=" text-[0.625rem] text-neutral-400 uppercase">Redes sociais</span>
          </div>
            <ul className="flex gap-4 text-sm">
              <li>
                <Link
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-hover-effect"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-hover-effect"
                >
                  Linkedin
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-hover-effect"
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-hover-effect"
                >
                  Behance
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

