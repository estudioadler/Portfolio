import Image from "next/image";
import Link from "next/link";

interface ICardProjectsProps {
  imgUrl?: string;
  alt: string
  title: string;
  description?: string
  url: string
}

export const CardProjects = ({ imgUrl = "", alt = "", title, url, description }: ICardProjectsProps) => {
  return (
    <Link href={url} draggable={false} className="flex flex-col gap-3 rounded-md w-full">
      <Image alt={alt} src={imgUrl} width={1000} height={800} className="w-full h-[260px] object-cover bg-neutral-100 rounded-md outline-hover" />

      <h2 className="text-neutral-900">{title}</h2>

    </Link>
  );
};
