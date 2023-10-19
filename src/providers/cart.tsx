'use client'

import React from 'react'

import { ProductWithTotalPrice } from '@/helpers/product'

export interface CartProduct extends ProductWithTotalPrice {
  quantity: number
}

interface ICartContext {
  products: CartProduct[]
  cartTotalPrice: number
  cartBasePrice: number
  cartTotalDiscount: number
  addProductToCart: (product: CartProduct) => void
  decreaseProductQuantity: (productId: string) => void
  increaseProductQuantity: (productId: string) => void
  removeProductFromCart: (productId: string) => void
}

export const CartContext = React.createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  addProductToCart: () => undefined,
  decreaseProductQuantity: () => undefined,
  increaseProductQuantity: () => undefined,
  removeProductFromCart: () => undefined,
})

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = React.useState<CartProduct[]>([])

  const addProductToCart = (product: CartProduct) => {
    // se o produto já estiver no carrinho, apenas aumente a sua quantidade
    const productIsAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    )

    if (productIsAlreadyOnCart) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            }
          }

          return cartProduct
        }),
      )

      return
    }

    // se não, adicione o produto à lista
    setProducts((prev) => [...prev, product])
  }

  const decreaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            }
          }

          return cartProduct
        })
        .filter((cartProduct) => cartProduct.quantity > 0),
    )
  }

  const increaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          }
        }

        return cartProduct
      }),
    )
  }

  const removeProductFromCart = (productId: string) => {
    setProducts((prev) =>
      prev.filter((cartProduct) => cartProduct.id !== productId),
    )
  }

  return (
    <CartContext.Provider
      value={{
        products,
        cartTotalDiscount: 0,
        cartBasePrice: 0,
        cartTotalPrice: 0,
        addProductToCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
