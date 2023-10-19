import { computeProductTotalPrice } from '@/helpers/product'
import { prismaClient } from '@/lib/prisma'

import { ProductList } from '@/components/ui/product-list'
import { SectionTitle } from '@/components/ui/section-title'

import { ProductImages } from './components/product-images'
import { ProductInfo } from './components/product-info'

interface ProductDetailsPageProps {
  params: {
    slug: string
  }
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const product = await prismaClient.product.findFirst({
    where: { slug: params.slug },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: params.slug,
              },
            },
          },
        },
      },
    },
  })

  if (!product) {
    return null
  }

  return (
    <div className="flex flex-col gap-8 pb-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />

      <div>
        <SectionTitle>Produtos Recomendados</SectionTitle>
        <ProductList products={product.category.products} />
      </div>
    </div>
  )
}
