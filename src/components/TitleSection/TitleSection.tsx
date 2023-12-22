import Link from "next/link";

interface ITitleSectionProps {
  title: string;
  link?: string;
}

export const TitleSection = ({
  title,
  link,
}: ITitleSectionProps) => {
  return (
    <div className="flex items-baseline justify-between pt-16 pb-4 font-sora">
      <h2 className="font-normal text-xs uppercase">{title}</h2>
        <Link href={"#"} className="text-sm underline-hover-effect">
          {link}
        </Link>
    </div>
  );
};
