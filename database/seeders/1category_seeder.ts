import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Category from '#models/category'

export default class extends BaseSeeder {
  public async run() {
    await Category.createMany([
      {
        id: 1,
        name: 'Camisas',
      },
      {
        id: 2,
        name: 'Shorts',
      },
      {
        id: 3,
        name: 'Jaquetas',
      },
      {
        id: 4,
        name: 'Acessórios',
      },
      {
        id: 5,
        name: 'Calçados',
      },
    ])
  }
}
