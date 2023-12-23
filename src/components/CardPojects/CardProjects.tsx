import { Code, Eye } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

interface ICardProjectsProps {
  imgUrl?: string;
  alt: string
  title: string;
  url: string
}

export const CardProjects = ({ imgUrl= "", alt = "", title, url }: ICardProjectsProps) => {
  return (
      <Link href={url} draggable={false} className="flex flex-col gap-2 rounded-xl w-full">
        <Image alt={alt} src={imgUrl} width={1000} height={800} className="w-full h-[260px] object-cover bg-neutral-100 rounded-xl outline-hover"/>
        <div className="flex justify-between items-center">
          <h2 className="text-neutral-900">{title}</h2>
        </div>
      </Link>
  );
};
