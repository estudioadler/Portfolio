import { CardProjects } from '@/components/CardPojects/CardProjects'
import { Contact } from '@/components/Contact/Contact'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { Hero } from '@/components/Hero/Hero'
import { TitleSection } from '@/components/TitleSection/TitleSection'


export default function Home() {
  return (
    <>
    {/* <Preloader/> */}
    <Header/>
    <Hero/>
    <TitleSection title='Projetos Recentes' link='Ver todos'/>
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
    <Footer/>
    </>
  )
}
