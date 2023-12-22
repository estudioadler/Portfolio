import { ArrowRight, DownloadSimple } from "@phosphor-icons/react";
import { Button } from "../Button/Button";

export const Hero = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row gap-6 md:gap-16 py-8 md:py-20">
        <h1 className="text-4xl md:text-5xl uppercase font-sans font-medium">
          desenvolvedor <br />
          front-end & <br />
          ui designer
        </h1>
        <div className="flex flex-col gap-6">
          <p className="max-w-md text-neutral-500">Engenheiro de Software 3/7, apaixonado pela interseção de Front-end, UI Design, SEO e Acessibilidade.</p>
          <div className="flex gap-2 items-center">
            <Button iconLeft={<ArrowRight size={20} />} text="Vamos conversar" variant={"white"} />
            <Button iconLeft={<DownloadSimple size={20} />} text="Download CV" variant={"white"} />
          </div>
        </div>
      </section>
    </>
  );
};
