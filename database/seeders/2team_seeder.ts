import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Team from '#models/team'

export default class extends BaseSeeder {
  public async run() {
    await Team.createMany([
      {
        id: 1,
        name: 'Flamengo',
      },
      {
        id: 2,
        name: 'Fluminense',
      },
      {
        id: 3,
        name: 'Vasco da Gama',
      },
      {
        id: 4,
        name: 'Botafogo',
      },
      {
        id: 5,
        name: 'Bangu',
      },
    ])
  }
}
