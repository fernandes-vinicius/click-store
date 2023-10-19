import { prismaClient } from '@/lib/prisma'

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
  })

  if (!product) {
    return null
  }

  return <div>{product?.name}</div>
}
