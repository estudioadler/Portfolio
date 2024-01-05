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
    <div className="flex items-baseline justify-between my-4 py-4 font-sora border-b border-1 border-neutral-300">
      <h2 className="font-normal text-sm text-neutral-600 uppercase">{title}</h2>
        <Link href={"#"} className="text-sm pb-0.5 underline-hover-effect">
          {link}
        </Link>
    </div>
  );
};
