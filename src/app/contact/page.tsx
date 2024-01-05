
import { Contact } from '@/components/Contact/Contact'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'

export const metadata = {
  title: 'Contato - Adler Gabriel',
  description: 'Entre em contato.',
}


export default function Home() {
  return (
    <>
    <Header/>
    <h1 className="text-4xl md:text-6xl uppercase font-sans font-medium pt-14 pb-6">
      Contato
    </h1>
    <Contact/>
    <Footer/>
    </>
  )
}
