
interface IMyTechsProps{
  name: string,
}

export const MyTechs = ({name}:IMyTechsProps) => {
  return (
    <>
    <div className='flex flex-col gap-4 w-fit py-1.5 px-3 bg-neutral-100 rounded-md font-sora'>
        <div key={name} className='flex items-center justify-center'>
          {name}        
        </div>
    </div>
    </>
    
  );
};

