import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Product from '#models/product'

export default class extends BaseSeeder {
  async run() {
    await Product.createMany([
      {
        name: 'Camisa Flamengo Preta - 23/24',
        price: 200.00,
        description: 'Camisa do Flamengo preta modelo 23/24',
        imageUrl: 'https://acdn.mitiendanube.com/stores/001/402/723/products/37b487401-0fc9ac9ee86d73e39516951737513621-640-0.jpg',
        categoryId: 1, 
        teamId: 1, 
        stock: 3,
      },
      {
        name: 'Camisa Flamengo Rosa',
        price: 150.00,
        description: 'Camisa Flamengo Rosa Unissex',
        imageUrl: 'https://cdn.awsli.com.br/600x1000/1890/1890260/produto/210290709/596d3b52-163e-464f-a753-72ef958febed-vhsykb.jpg',
        categoryId: 1, 
        teamId: 1, 
        stock: 5,
      },
      
    ])
  }
}