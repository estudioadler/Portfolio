import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

interface ICardProjectsProps {
  imgUrl?: string;
  alt: string
  title: string;
  description: string
  url: string
}

export const CardProjects = ({ imgUrl= "", alt = "", title, description, url }: ICardProjectsProps) => {
  return (
      <Link href={url} draggable={false} className="flex flex-col gap-4 rounded-lg w-full outline outline-1 outline-neutral-300 p-3 hover:outline-neutral-600 hover:transition ease-in-out duration-300">
        <Image alt={alt} src={imgUrl} width={1000} height={1000} className="border border-1 border-neutral-400 rounded-md"/>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl text-neutral-900">{title}</h2>
          <p className="text-sm text-neutral-500">{description}</p>
        </div>
      </Link>
  );
};
