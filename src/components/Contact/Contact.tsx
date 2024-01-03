"use client"

import { ArrowRight } from "@phosphor-icons/react";
import { Button } from "../Button/Button";
import { Links } from "../Links/Links";
export const Contact = () => {

  const socialLinks = [
    { label: "Github", link: "https://github.com/estudioadler" },
    { label: "Linkedin", link: "https://www.linkedin.com/in/adlergabriel" },
    { label: "Twitter", link: "https://twitter.com/a_gabriel20" },
    { label: "Instagram", link: "https://www.instagram.com/adler__gabriel" },
  ]


  return (
    <section className="md:flex justify-between font-sora py-8 md:py-20">
      <div className="flex flex-col gap-8 max-w-md">
        <h1 className="text-3xl font-medium uppercase font-sans">Entre em contato comigo.</h1>
        <p className="text-neutral-500">
          Estou ansioso para ouvir sobre seu projeto! Seja uma pergunta,
          sugestão ou ideia, estou aqui para ajudar. Vamos começar essa
          conversa.
        </p>
        {/*social links*/}
        <div className="flex justify-between mb-8">
          <ul className="flex flex-col gap-2">
            {socialLinks.map((link: any) => (
              <li key={link.label} className="flex items-baseline gap-2">
                <Links url={link.link} icon={<ArrowRight size={16} />}>{link.label}</Links>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*form*/}
      <form
        className="flex flex-col gap-2 md:w-1/2">
        <input
          className="bg-transparent resize-none p-4 text-sm rounded-md outline-hover"
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite seu nome"
          required
        />
        <input
          className="bg-transparent resize-none p-4 text-sm rounded-md outline-hover"
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu e-mail"
          required
        />
        <textarea
          className="bg-transparent resize-none p-4 text-sm rounded-md outline-hover"
          id="mensagem"
          name="mensagem"
          placeholder="Digite sua mensagem"
          rows={8}
          maxLength={500}
          required
        ></textarea>
        <Button variant="white" iconLeft={<ArrowRight size={20} />} text="Enviar" />
      </form>
    </section>
  );
};
