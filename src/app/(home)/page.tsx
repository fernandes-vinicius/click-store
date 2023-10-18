import { prismaClient } from '@/lib/prisma'

import { Categories } from './components/categories'
import { ProductList } from './components/product-list'
import { SessionTitle } from './components/session-title'
import { PromoBanner } from './components/promo-banner'

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'keyboards',
      },
    },
  })

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'mouses',
      },
    },
  })

  return (
    <main className="flex flex-col gap-8 py-8">
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% de desconto só esse mês!"
      />

      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SessionTitle>Ofertas</SessionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="Até 55% de desconto em Mouses!"
      />

      <div>
        <SessionTitle>Teclados</SessionTitle>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        src="/banner-home-03.png"
        alt="Até 20% de desconto em Fones!"
      />

      <div>
        <SessionTitle>Mouses</SessionTitle>
        <ProductList products={mouses} />
      </div>
    </main>
  )
}
