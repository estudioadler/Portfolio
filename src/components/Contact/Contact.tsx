"use client"
import { useForm } from "react-hook-form";
import { ArrowRight } from "@phosphor-icons/react";
import { Button } from "../Button/Button";
import { Links } from "../Links/Links";
import { GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react/dist/ssr";
export const Contact = () => {

  const socialLinks = [
    { label: "Github", url: "https://github.com/estudioadler", icon: <GithubLogo size={16} weight="light" /> },
    { label: "Linkedin", url: "https://www.linkedin.com/in/adlergabriel", icon: <LinkedinLogo size={16} weight="light" /> },
    { label: "Twitter", url: "https://twitter.com/a_gabriel20", icon: <TwitterLogo size={16} weight="light" /> },
    { label: "Instagram", url: "https://www.instagram.com/adler__gabriel", icon: <InstagramLogo size={16} weight="light" /> },
  ]


  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between font-sora py-8 md:py-20">
      <div className="flex flex-col gap-8 max-w-md">
        <h1 className="text-3xl font-medium uppercase font-sans">Vamos começar um projeto juntos.</h1>
        <p className="text-neutral-500">
          Sinta-se à vontade para entrar em contato comigo através
          do formulário de contato.
          Estou sempre aberto a novas oportunidades, colaborações e
          conversas envolventes sobre o emocionante campo da tecnologia e além.
        </p>
        {/*social links*/}
        <div className="flex justify-between mb-8">
          <ul className="md:flex  md:gap-6">
            {socialLinks.map((link: any) => (
              <li key={link.label} className="flex items-baseline gap-2">
                <Links url={link.url} icon={link.icon}>{link.label}</Links>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*form*/}
      <form
        className="flex flex-col gap-2">
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
        <Button type="submit" variant="white" iconLeft={<ArrowRight size={20} />} text="Enviar" />
      </form>
    </section>
  );
};
