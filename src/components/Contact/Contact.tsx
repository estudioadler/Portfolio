"use client"

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "../Button/Button";
import Link from "next/link";
export const Contact = () => {

  
  return (
    <section className="md:flex justify-between font-sora">
      <div className="flex flex-col gap-8 max-w-md">
        <h1 className="text-3xl font-medium uppercase font-sans">Entre em contato comigo.</h1>
        <p className="text-neutral-500">
          Estou ansioso para ouvir sobre seu projeto! Seja uma pergunta,
          sugestão ou ideia, estou aqui para ajudar. Vamos começar essa
          conversa.
        </p>
        <div className="flex justify-between mb-8">
          <ul className="flex flex-col gap-2">
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
      <form 
        className="flex flex-col gap-2 md:w-1/2">
        <input
          className="resize-none p-4 text-sm rounded-lg outline-hover"
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite seu nome"
          required
        />
        <input
          className="resize-none p-4 text-sm rounded-lg outline-hover"
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu e-mail"
          required
        />
        <textarea
          className="resize-none p-4 text-sm rounded-lg outline-hover"
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
