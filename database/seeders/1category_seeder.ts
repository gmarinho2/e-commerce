import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Category from '#models/category'

export default class extends BaseSeeder {
  public async run() {
    await Category.createMany([
      {
        id: 1,
        name: 'Camisas Principais',
      },
      {
        id: 2,
        name: 'Camisas Vintage',
      },
      {
        id: 3,
        name: 'Camisas Alternativas',
      },
    ])
  }
}
