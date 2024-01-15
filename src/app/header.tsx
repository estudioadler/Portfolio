"use client";

import { useState } from 'react'
import { ArrowUpRight } from "@phosphor-icons/react";
import { ArrowRight, X } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/Button/Button";
import { Links } from "../components/Links/Links";
import { useRouter } from 'next/navigation';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const toggleMenu = ():any => {
    setShowMenu(!showMenu);
  };

  const closeMenu = ():any => {
    setShowMenu(false);
  };

  const handleNavigation = (url: string) => {
    router.push(url);
    closeMenu();
  };

  const menuItems = [
    { label: "Inicio", link: "/" },
    { label: "Sobre", link: "/about" },
    { label: "Projetos", link: "/projects" },
    { label: "Skills", link: "/skills" },
    { label: "Contato", link: "/contact" },
  ];

  const socialLinks = [
    { label: "Github", link: "https://github.com/estudioadler" },
    { label: "Linkedin", link: "https://www.linkedin.com/in/adlergabriel" },
    { label: "Twitter", link: "https://twitter.com/a_gabriel20" },
    { label: "Instagram", link: "https://www.instagram.com/adler__gabriel" },
  ]

  return (
    <header className="flex justify-between items-center w-full h-20 md:h-32 font-sora">
      {/* logotipo */}
      <Link href={"/"} className="flex items-center gap-3">
        <Image src="/eu.png" alt="logo" width={44} height={44} className="rounded-full shadow-sm border border-neutral-300" />
      <div className="flex flex-col text-neutral-900">
        <span>Adler Gabriel</span>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
           <span className="text-xs text-neutral-400">Disponivel para trabalho</span>
        </div>
      </div>
      </Link>
      {/* botao cta */}
      <div className="flex items-center gap-2">
        <div className="md:flex gap-2 items-center hidden">
              <Button iconLeft={<ArrowRight size={18} />} text="Vamos conversar" variant={"black"} type={"button"} />
        </div>
        {/* botao hamburguer */}
        <Link
          href={"#"}
          onClick={toggleMenu}
          className="group p-5 rounded-full bg-neutral-100 hover:bg-neutral-200"
        >
          <div className="grid grid-cols-2 gap-1 group-hover:transform group-hover:-rotate-90 transition ease-in-out duration-300">
            <span className="w-1 h-1 bg-neutral-900 rounded-full"></span>
            <span className="w-1 h-1 bg-neutral-900 rounded-full"></span>
            <span className="w-1 h-1 bg-neutral-900 rounded-full"></span>
            <span className="w-1 h-1 bg-neutral-900 rounded-full"></span>
          </div>
        </Link>
      </div>

      {/* menu aberto */}
      <nav
        className={`py-6 px-6 md:py-10 md:px-10 w-screen md:w-1/3 h-screen fixed top-0 right-0 z-50 bg-neutral-900 menu-animado ${showMenu ? "show" : ""}`}
      >
        {/* botao close */}
        <Link
          href={"#"}
          onClick={toggleMenu}
          className="text-neutral-100 bg-neutral-900 absolute top-10 md:top-[44px] right-6 md:right-[61px] p-5 rounded-full hover:bg-neutral-800 active:bg-neutral-700"
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
                  onClick={() => handleNavigation(item.link)}
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
            {socialLinks.map((link: any) => (
              <li key={link.label} className="flex items-baseline gap-2">
                <Links url={link.link}>{link.label}</Links>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

