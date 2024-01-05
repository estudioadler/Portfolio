import Image from 'next/image';
import data from '../../../public/skills.json';

interface ISectionTechCardsProps {
    title: string;
    items: { name: string; icon: string; size: number }[];
}
const SectionTechCards = ({ title, items }: ISectionTechCardsProps) => (
  <div className="flex flex-col gap-8">
    <h2 className='text-xl'>{title}</h2>
    <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2'>
      {items.map((item, index) => (
        <li key={index} className='flex items-center gap-4 p-2 bg-neutral-100 rounded-md'>
          <div className='bg-neutral-50 rounded-md w-14 h-14 flex justify-center items-center'>
            <Image src={item.icon} alt={item.name} width={item.size} height={item.size} />
          </div>
          {item.name}
        </li>
      ))}
    </ul>
  </div>
);
  
export const TechCards = () => (
    <div className='flex flex-col gap-6 py-8'>
      <SectionTechCards title="Front-End" items={data.frontEnd.libraries} />
      <SectionTechCards title="Documentacao / Testes" items={data.tests.frameworks} />
      <SectionTechCards title="Design" items={data.design.tools} />
      <SectionTechCards title="Controle de Versão" items={data.versionControl} />
      <SectionTechCards title="Infraestrutura" items={data.infrastructure.providers} />
      <SectionTechCards title="Banco de Dados" items={data.databases} />
    </div>
  );