import Product from '#models/product'
import { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
    async index() {
        const products = await Product.all()
        return products
    }

    //acha um produto passado como parametro  na url (na requisição http??? é a mesma coisa?)
    async show({ params, response }: HttpContext) {
        const product = await Product.findBy({ id: params.id })
        if (!product) {
            return response.status(404)
        }
        return product
    }

    async add({request}: HttpContext) {
        const product = request.body()
        const inserted = await Product.create(product)
        return inserted
    }

    async update({params, response, request}: HttpContext) {
        const data = request.body()
        const product = await Product.findBy({id: params.id})
        if (!product) {
            return response.status(404)
        }

        product.merge(data)
        await product.save()

        return product
    }

    async remove({params, response}: HttpContext) {
        const product = await Product.findBy({id: params.id})
        if (!product) {
            return response.status(404)
        }
        await product.delete()
        return product
    }
}