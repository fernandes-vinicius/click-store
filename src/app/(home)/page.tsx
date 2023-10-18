import Image from 'next/image'

import { Categories } from './components/categories'

export default function Home() {
  return (
    <main className="p-5">
      <Image
        src="/banner-home-01.png"
        alt="Até 55% de desconto só esse mês!"
        height={150}
        width={350}
        sizes="100vw"
        className="h-auto w-full"
      />

      <div className="mt-8">
        <Categories />
      </div>
    </main>
  )
}
