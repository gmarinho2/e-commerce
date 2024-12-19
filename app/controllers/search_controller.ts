import { HttpContext } from '@adonisjs/core/http'

import Product from '#models/product'

export default class SearchController {
  async index({ request, view }:HttpContext) {
    const query = request.input('query');
    const products = await Product.query()
      .where('name', 'ILIKE', `%${query}%`)  
      .exec();
    
    
    return view.render('pages/search/result.edge', { products });
  }
}
