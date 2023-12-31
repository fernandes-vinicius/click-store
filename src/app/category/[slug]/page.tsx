import { prismaClient } from '@/lib/prisma'
import { computeProductTotalPrice } from '@/helpers/product'
import { Badge } from '@/components/ui/badge'
import { ProductItem } from '@/components/ui/product-item'
import { CATEGORY_ICON, type CategoryIconType } from '@/constants/category-icon'

interface CategoryProductsPageProps {
  params: {
    slug: string
  }
}

export default async function CategoryProductsPage({
  params,
}: CategoryProductsPageProps) {
  const category = await prismaClient.category.findFirst({
    where: { slug: params.slug },
    include: { products: true },
  })

  if (!category) {
    return null
  }

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        {CATEGORY_ICON[params.slug as CategoryIconType]} {category?.name}
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {category?.products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  )
}
