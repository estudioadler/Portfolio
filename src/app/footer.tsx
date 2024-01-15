import { ArrowUp, Copyright } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export const Footer = () => {
  // Obtém a data atual
  const currentDate = new Date();

  // Obtém o ano da data atual
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="flex justify-between items-baseline w-full h-24">
      <div className="flex gap-2 items-center text-sm text-neutral-500">
        <Copyright size={18} />
        {currentYear} - Adler Gabriel - All rights reserved.
      </div>
      
      <Link href={"#"} className="text-neutral-900 outline outline-1 outline-neutral-300 hover:outline-neutral-400 p-5 rounded-full">
          <ArrowUp size={18} />
        </Link>
    </footer>
  );
};
