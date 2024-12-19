import { HttpContext } from '@adonisjs/core/http'
import { addItemCart } from '#validators/cart'
import Product from '#models/product'
import db from '@adonisjs/lucid/services/db'

export default class CartController {
    public async index({view}: HttpContext) {
    
    return view.render('pages/cart/show')
    
    }
  

  public async addCarrinho({ request, response }: HttpContext) {
    const { id, quantity } = await addItemCart.validate(request.all())

    const product = await Product.query().where('id', id).first()

    if (!product) {
      throw new Error('ERROR')
    }

    const cart = JSON.parse(request.cookie('cart', JSON.stringify([]))) as {
      id: number
      quantity: number
    }[]

    const currProduct = cart.find((item) => item.id === id)

    if (currProduct) {
      currProduct.quantity += quantity
    } else {
      cart.push({ id, quantity })
    }

    return response.cookie('cart', JSON.stringify(cart)).status(204)
  }

  public async checkout({ request, response }: HttpContext) {
    const cart = JSON.parse(request.cookie('cart', JSON.stringify([]))) as {
      id: number
      quantity: number
    }[]

    if (cart.length === 0) {
      throw new Error('ERROR')
    }

    await db.transaction(async (trx) => {
      for (const item of cart) {
        const product = await Product.find(item.id, { client: trx })

        if (!product) {
          throw new Error('ERROR')
        }

        if (product.stock < item.quantity) {
          throw new Error('ERROR')
        }

        product.stock -= item.quantity
        await Product.query({ client: trx }).where('id', item.id).update({ stock: product.stock })
      }
    })

    return response.clearCookie('cart').status(204)
  }

  public async limparCarrinho({ response }: HttpContext) {
    return response.cookie('cart', JSON.stringify([])).status(204)
  }

  public async removerCarrinho({ request, response }: HttpContext) {
    const { id, quantity } = request.all()

    const cart = JSON.parse(request.cookie('cart', JSON.stringify([]))) as {
      id: number
      quantity: number
    }[]

    const realQuantity = quantity ?? 1

    const currProductIndex = cart.findIndex((item) => item.id === id)

    if (currProductIndex === -1) {
      throw new Error('ERROR')
    }

    if (cart[currProductIndex].quantity <= realQuantity) {
      cart.splice(currProductIndex, 1)
    } else {
      cart[currProductIndex].quantity -= realQuantity
    }

    return response.cookie('cart', JSON.stringify(cart)).status(204)
  }
}
