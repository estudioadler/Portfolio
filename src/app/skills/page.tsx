
import { Contact } from '@/components/Contact/Contact'
import { TechCards } from '@/components/TechCards/TechCards'
import { TitleSection } from '@/components/TitleSection/TitleSection'


export const metadata = {
  title: 'Skills - Adler Gabriel',
  description: 'Meus conhecimentos',
}

export default function Skills() {
  return (
    <>
    
      <h1 className="text-4xl md:text-6xl uppercase font-sans font-medium pt-14 pb-6">
        Skills
      </h1>
      <p className="max-w-2xl text-neutral-500 pb-14">Explore as tecnologias e ferramentas que impulsionam a minha experiência em desenvolvimento. Eu seleciono e uso meticulosamente essas ferramentas para criar soluções robustas e eficientes, priorizando sempre a experiência do usuário.</p>
      <TechCards />
      <TitleSection title='Contato' />
      <Contact /> 
      
    </>
  )
}
