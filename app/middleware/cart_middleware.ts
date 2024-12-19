import Product from '#models/product'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class CartMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    if (!ctx.view) return await next()

    const userCart = JSON.parse(ctx.request.cookie('cart', '[]')) as Array<{
      id: number
      quantity: number
    }>

    if (userCart.length) {
      const products = await Product.query()
        .whereIn(
          'id',
          userCart.map((item) => item.id)
        )
        .exec()

      const realProducts = products.map((product) => ({
        ...product.serialize(),
        quantity: userCart.find((item) => item.id === product.id)?.quantity || 0,
      })) as Partial<Product & { quantity: number }>[]

      const cart = {
        products: realProducts,
        totalCount: userCart.reduce((acc, item) => acc + item.quantity, 0),
        totalPrice: userCart
          .reduce(
            (acc, item) =>
              acc +
              (realProducts.find((product) => product.id === item.id)?.price ?? 0) * item.quantity,
            0
          )
          .toFixed(2),
      }

      ctx.view.share({
        cart,
      })
    }

    return await next()
  }
}
