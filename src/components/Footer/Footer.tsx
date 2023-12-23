import { Copyright, Moon, Sun, Monitor, ArrowUp } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export const Footer = () => {
  // Obtém a data atual
  const currentDate = new Date();

  // Obtém o ano da data atual
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="flex justify-between items-center w-full h-28">
      <div className="flex gap-2 items-center text-xs text-neutral-500">
        <Copyright size={18} />
        {currentYear} - Adler Gabriel
      </div>
      
      <Link href={"#"} className="grid grid-cols-2 gap-1 transform rotate-45 hover:bg-neutral-100 p-4 rounded-full">
          <span className="w-1 h-1 bg-neutral-900 rounded-full"></span>
          <span className="w-1 h-1 bg-neutral-900 rounded-full"></span>
          <span className="w-1 h-1 bg-neutral-900 rounded-full"></span>
        </Link>
    </footer>
  );
};
