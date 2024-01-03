import { Code, Eye } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

interface ICardProjectsProps {
  imgUrl?: string;
  alt: string
  title: string;
  description?: string
  url: string
}

export const CardProjects = ({ imgUrl= "", alt = "", title, url, description }: ICardProjectsProps) => {
  return (
      <Link href={url} draggable={false} className="flex flex-col gap-3 rounded-md w-full">
        <Image alt={alt} src={imgUrl} width={1000} height={800} className="w-full h-[260px] object-cover bg-neutral-100 rounded-md outline-hover"/>
        <div className="flex flex-col gap-2">
          <h2 className="text-neutral-900">{title}</h2>
          <p className="text-neutral-400 text-xs">{description}</p>
        </div>
      </Link>
  );
};
