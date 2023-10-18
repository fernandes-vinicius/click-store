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
        height={150}
        width={350}
        sizes="100vw"
        className="h-auto w-full px-5"
      />

      <div className="px-5">
        <Categories />
      </div>

      <ProductList products={deals} />
    </main>
  )
}
