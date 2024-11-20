import User from "#models/user"
import { HttpContext } from "@adonisjs/core/http"

export default class UsersController {

  async index() {
    const users = await User.all()
    return users
  }

  async show({ params, response, view }: HttpContext) {
    const user = await User.findBy({ id: params.id })
    if (!user) {
      return response.status(404)
    }
    return view.render('pages/users/show', { user })
  }

  async add({ request, response }: HttpContext) { //validar ainda
    const { password, password_confirm, ...userData } = request.body()
    const added = await User.create({
      ...userData,
      password,
    })

    return response.redirect().toRoute('auth.create')
  }

  async edit({ params, response, view }: HttpContext) {

    const user = await User.findBy({ id: params.id })

    if (!user) {
      return response.status(404)
    }

    return view.render('pages/users/edit', { user })
  }
  

  async create({ view }: HttpContext) {
    return view.render('pages/users/create')
  }

  async update({params, request, response}: HttpContext){

    const data = request.only(['name', 'email', 'phone']);
    const user = await User.findOrFail(params.id);
    
    user.merge(data);
    await user.save();
  
    return response.redirect('/users/' + user.id);
  }

  async remove({params, response}: HttpContext){
    const user = await User.findBy({id: params.id})
    if (!user) {
        return response.status(404)
    }
    await user.delete()

    return user
  }
}
