import { HttpContext } from '@adonisjs/core/http'

import Product from '#models/product'
import Team from '#models/team';


export default class TeamController {
  async find({ params, view }: HttpContext) {
    const teamId = params.teamId;

    const products = await Product.query()
      .where('teamId', teamId)
      .exec();

    return view.render('pages/products/team.edge', { products });
  }

  async index({ view }: HttpContext) {
    const teams = await Team.query().exec(); // Recupera todos os clubes

    return view.render('pages/products/team-index.edge', { teams });
  }
}

