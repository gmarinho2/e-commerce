import { HttpContext } from "@adonisjs/core/http"

export default class AuthController {
  create({ view }: HttpContext) {
    return view.render('pages/auth/create')
  }
}