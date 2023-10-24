'use server'

import { CartProduct } from '@/providers/cart'
import { prismaClient } from '@/lib/prisma'

export async function createOrder(cartProducts: CartProduct[], userId: string) {
  const order = await prismaClient.order.create({
    data: {
      userId,
      status: 'WAITING_FOR_PAYMENT',
      orderProducts: {
        createMany: {
          data: cartProducts.map((cartProduct) => ({
            basePrice: cartProduct.basePrice,
            discountPercentage: cartProduct.discountPercentage,
            productId: cartProduct.id,
            quantity: cartProduct.quantity,
          })),
        },
      },
    },
  })

  return order
}
