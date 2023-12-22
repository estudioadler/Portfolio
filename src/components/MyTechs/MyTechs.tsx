
import { getRelativeTimeString } from "@/utils/get-relative-time"

interface IMyTechsProps{
  icon: React.ReactNode
  name: string,
  startDate: string
}

export const MyTechs = ({icon, name, startDate}:IMyTechsProps) => {
  const relativeTime = getRelativeTimeString(new Date(startDate), 'pt-BR',).replace('há', '')
  return (
    <div className='flex flex-col gap-4 w-full p-6 bg-neutral-900 font-sora'>
        <div key={name} className='flex items-center justify-between'>
          {name}
          {icon}
        </div>
      <span className="text-sm text-neutral-500">{relativeTime} de experiência</span>
    </div>
  );
};

