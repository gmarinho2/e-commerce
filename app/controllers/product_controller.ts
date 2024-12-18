import { HttpContext } from '@adonisjs/core/http'

import Product from '#models/product'
import Category from "#models/category"

export default class ProductsController {
    async index({ view, request }: HttpContext) {
      const page = request.input('page', 1)
      const max_size = 10
  
      const payload = request.only(['name'])
  
      const query = Product.query()
  
      if (payload.name && payload.name.length > 0) {
        query.where('name', 'like', `%${payload.name}%`)
      }
  
      const products = await query.paginate(page, max_size)
  
      return view.render('pages/products/index', { products })
    }
  
    async show({ view, params }: HttpContext) {
      const product = await Product.findOrFail(params.id)
      await product.load('category')
  
      return view.render('pages/products/show', { product })
    }
  
    async store({ request, response }: HttpContext) {
      const payload = request.only(['name', 'price', 'description', 'categoryId', 'imageUrl'])
  
      const product = await Product.create(payload)
  
      return response.redirect().toRoute('products.show', { id: product.id })
    }
  
    async create({ view }: HttpContext) {
      const categories = await Category.all()
      return view.render('pages/products/create', { categories })
    }
  
    async patch({ params, request}: HttpContext) {
      const product = await Product.findOrFail(params.id)
  
      const payload = request.only(['name', 'price', 'description', 'categoryId', 'imageUrl'])
      product.merge(payload)
  
      await product.save()
  
      return product
    }
  
    async destroy({ params }: HttpContext) {
      const product = await Product.findOrFail(params.id)
  
      await product.delete()
  
      return { sucess: `${params.id} removido`}
    }
}

// export default class ProductsController {
//     async index() {
//         const products = await Product.all()
//         return products
//     }

//     //acha um produto passado como parametro  na url (na requisição http??? é a mesma coisa?)
//     async show({ params, response }: HttpContext) {
//         const product = await Product.findBy({ id: params.id })
//         if (!product) {
//             return response.status(404)
//         }
//         return product
//     }

//     async add({request}: HttpContext) {
//         const product = request.body()
//         const inserted = await Product.create(product)
//         return inserted
//     }

//     async update({params, response, request}: HttpContext) {
//         const data = request.body()
//         const product = await Product.findBy({id: params.id})
//         if (!product) {
//             return response.status(404)
//         }

//         product.merge(data)
//         await product.save()

//         return product
//     }

//     async remove({params, response}: HttpContext) {
//         const product = await Product.findBy({id: params.id})
//         if (!product) {
//             return response.status(404)
//         }
//         await product.delete()
//         return product
//     }
// }