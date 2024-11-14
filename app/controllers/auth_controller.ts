import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import { createAuthValidator } from '#validators/auth'

export default class AuthController {
  async create({ view }: HttpContext) {
    return view.render('pages/auth/create')
  }

  async store({ auth, request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(createAuthValidator)

    const user = await User.findBy('email', email)

    if (!user) {
      return response.abort('E-mail inválido')
    }

    await User.verifyCredentials(email, password)

    await auth.use('web').login(user)

    return response.redirect().toRoute('products.index')

  }
}
