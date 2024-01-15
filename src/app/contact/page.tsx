
import { Contact } from '@/components/Contact/Contact'

export const metadata = {
  title: 'Contato - Adler Gabriel',
  description: 'Entre em contato.',
}


export default function Home() {
  return (
    <>
    <h1 className="text-4xl md:text-6xl uppercase font-sans font-medium pt-14 pb-6">
      Contato
    </h1>
    <Contact/>
    </>
  )
}
