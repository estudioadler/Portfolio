
import { CardProjects } from '@/components/CardPojects/CardProjects'
import { Contact } from '@/components/Contact/Contact'
import { TitleSection } from '@/components/TitleSection/TitleSection'

export const metadata = {
  title: 'Projetos - Adler Gabriel',
  description: 'Projetos em desenvolvimento',
}

export default function Home() {
  return (
    <>
    <h1 className="text-4xl md:text-6xl uppercase font-sans font-medium py-14">
      Projetos
    </h1>
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8'>
      <CardProjects
      alt=''
      title='Sistema de Login'
      imgUrl=''
      url='github.com'
      description='Sistema de Login desenvolvido em React.js e TypeScript, e autenticação de usuário com NxtAuth e Firebase.'
      />
      <CardProjects
      alt=''
      title='Sistema de Login'
      imgUrl=''
      url='github.com'
      description='Sistema de Login desenvolvido em React.js e TypeScript, e autenticação de usuário com NxtAuth e Firebase.'
      />
      <CardProjects
      alt=''
      title='Sistema de Login'
      imgUrl=''
      url='github.com'
      description='Sistema de Login desenvolvido em React.js e TypeScript, e autenticação de usuário com NxtAuth e Firebase.'
      />
      <CardProjects
      alt=''
      title='Sistema de Login'
      imgUrl=''
      url='github.com'
      description='Sistema de Login desenvolvido em React.js e TypeScript, e autenticação de usuário com NxtAuth e Firebase.'
      />
      <CardProjects
      alt=''
      title='Sistema de Login'
      imgUrl=''
      url='github.com'
      description='Sistema de Login desenvolvido em React.js e TypeScript, e autenticação de usuário com NxtAuth e Firebase.'
      />
      <CardProjects
      alt=''
      title='Sistema de Login'
      imgUrl=''
      url='github.com'
      description='Sistema de Login desenvolvido em React.js e TypeScript, e autenticação de usuário com NxtAuth e Firebase.'
      />
    </section>
    <TitleSection title='Contato'/>
    <Contact/>
    </>
  )
}
