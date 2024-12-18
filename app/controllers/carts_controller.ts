import type { HttpContext } from '@adonisjs/core/http'

export default class CartsController {
  
public async index({ auth, view, response }: HttpContext) {

    const user = await auth.use('web').authenticate();

if (!user) {
return response.unauthorized('Você precisa estar logado.');
} 

console.log("chegou no carrinho")

return view.render('components/layouts/partials/cart')

}

}