import Image from 'next/image'

import { prismaClient } from '@/lib/prisma'

import { Categories } from './components/categories'
import { ProductList } from './components/product-list'

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })

  return (
    <main className="flex flex-col gap-8 py-8">
      <Image
        src="/banner-home-01.png"
        alt="Até 55% de desconto só esse mês!"
        height={0}
        width={0}
        sizes="100vw"
        className="h-auto w-full px-5"
      />

      <div className="px-5">
        <Categories />
      </div>

      <div>
        <p className="mb-3 pl-5 font-bold uppercase">Ofertas</p>
        <ProductList products={deals} />
      </div>

      <Image
        src="/banner-home-02.png"
        alt="Até 55% de desconto em Mouses!"
        height={0}
        width={0}
        sizes="100vw"
        className="h-auto w-full px-5"
      />
    </main>
  )
}
