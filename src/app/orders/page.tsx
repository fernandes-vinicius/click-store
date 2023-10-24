import { PackageSearchIcon } from 'lucide-react'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/lib/auth'
import { prismaClient } from '@/lib/prisma'
import { Badge } from '@/components/ui/badge'

import { OrderItem } from './components/order-item'

export default async function OrdersPage() {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    return <p>Access Denied</p>
  }

  const orders = await prismaClient.order.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  })

  return (
    <div className="p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <PackageSearchIcon size={16} /> Meus Pedidos
      </Badge>

      <div className="mt-5 flex flex-col gap-5">
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  )
}
