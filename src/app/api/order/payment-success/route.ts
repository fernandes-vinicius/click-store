import { NextResponse } from 'next/server'
import Stripe from 'stripe'

// import { prismaClient } from '@/lib/prisma'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
})

export const POST = async (request: Request) => {
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    console.log('non signature')
    return NextResponse.error()
  }

  const text = await request.text()

  const event = stripe.webhooks.constructEvent(
    text,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET_KEY,
  )

  console.log('bora laaaa')

  if (event.type === 'checkout.session.completed') {
    const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
      event.data.object.id,
      {
        expand: ['line_items'],
      },
    )
    const lineItems = sessionWithLineItems.line_items

    console.log(lineItems)

    // TODO - CRIAR PEDIDO
  }

  return NextResponse.json({ received: true })
}
