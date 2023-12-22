import Link from "next/link";

interface ILinkprops {
    children: string,
    icon: React.ReactNode
}

export const Links = ({children, icon}:ILinkprops) => {
  return (
    <Link href={"#"} className="flex items-start text-sm underline-hover-effect">
      {children}
      {icon}
    </Link>
  );
};
