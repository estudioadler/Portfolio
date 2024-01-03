
import Link from "next/link";
import { MyTechs } from "../MyTechs/MyTechs";
import { Plus } from "@phosphor-icons/react/dist/ssr";

export const Hero = () => {
  const techs = ["JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "MySQL", "Tailwind CSS", "Git", "Github", "Figma",];
  return (
    <>
      <section className="flex flex-col py-8 md:py-12">
        <h1 className="text-4xl md:text-5xl uppercase font-sans font-medium mb-6">
          desenvolvedor<br />
          front-end &<br />
          ui designer
        </h1>
        <div className="flex flex-col gap-6 max-w-md">
          <p className="max-w-md text-neutral-500">Engenheiro de Software 3/7, apaixonado pela interseção de Front-end, UI Design, SEO e Acessibilidade. <Link href={"#"} className="underline">Veja mais</Link></p>
          <div className="flex items-center flex-wrap gap-2 text-sm">
            {techs.map((tech) => (
              <MyTechs key={tech} name={tech} />
            ))}
            <button className="w-fit py-1.5 px-3 bg-neutral-100 hover:bg-neutral-200 rounded-md"><Plus size={18} /></button>
          </div>

        </div>
      </section>
    </>
  );
};
