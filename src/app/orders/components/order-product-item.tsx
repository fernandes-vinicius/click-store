import Image from 'next/image'
import { Prisma } from '@prisma/client'

import { computeProductTotalPrice } from '@/helpers/product'

interface OrderProductItemProps {
  orderProduct: Prisma.OrderProductGetPayload<{
    include: {
      product: true
    }
  }>
}

export function OrderProductItem({ orderProduct }: OrderProductItemProps) {
  const productWithTotalPrice = computeProductTotalPrice(orderProduct.product)

  return (
    <div className="flex items-center gap-4">
      <div className="flex w-[85px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={orderProduct.product.imageUrls[0]}
          alt={orderProduct.product.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[80%] w-auto max-w-[80%] object-contain"
        />
      </div>

      <div className="flex w-full flex-col gap-1">
        <div className="flex w-fit rounded-md bg-accent px-3 py-1">
          <p className="text-[10px]">
            Vendido e entregue por{' '}
            <span className="font-bold">Click Store</span>
          </p>
        </div>

        <p className="text-xs">{orderProduct.product.name}</p>

        <div className="flex w-full items-center justify-between gap-1">
          <div className="flex items-center gap-1">
            <p className="text-sm font-bold">
              R$ {productWithTotalPrice.totalPrice.toFixed(2)}
            </p>
            {productWithTotalPrice.discountPercentage > 0 && (
              <p className="text-xs line-through opacity-60">
                {Number(productWithTotalPrice.basePrice).toFixed(2)}
              </p>
            )}
          </div>

          <p className="text-xs">{orderProduct.quantity}</p>
        </div>
      </div>
    </div>
  )
}
