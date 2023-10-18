import Image from 'next/image'

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
    </main>
  )
}
