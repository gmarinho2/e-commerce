import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Team from '#models/team'

export default class extends BaseSeeder {
  public async run() {
    await Team.createMany([
      { id: 1, name: 'Flamengo' },
      { id: 2, name: 'Fluminense' },
      { id: 3, name: 'Vasco' },
      { id: 4, name: 'Botafogo' },
      { id: 5, name: 'Bangu' },
      { id: 6, name: 'São Paulo' },
      { id: 7, name: 'Palmeiras' },
      { id: 8, name: 'Corinthians' },
      { id: 9, name: 'Santos' },
      { id: 10, name: 'Grêmio' },
      { id: 11, name: 'Internacional' },
      { id: 12, name: 'Cruzeiro' },
      { id: 13, name: 'Atlético Mineiro' },
      { id: 14, name: 'Bahia' },
      { id: 15, name: 'Fortaleza' },
      { id: 16, name: 'Ceará' },
      { id: 17, name: 'Sport Recife' },
      { id: 18, name: 'Botafogo-SP' },
      { id: 19, name: 'Vila Nova' },
      { id: 20, name: 'Ponte Preta' },
      { id: 21, name: 'Náutico' },
      { id: 22, name: 'Paraná Clube' },
      { id: 23, name: 'Atlético Paranaense' },
      { id: 24, name: 'Fluminense de Feira' },
      { id: 25, name: 'Chapecoense' },
      { id: 26, name: 'Coritiba' },
      { id: 27, name: 'Vasco da Gama' },
      { id: 28, name: 'América Mineiro' },
      { id: 29, name: 'Figueirense' },
      { id: 30, name: 'Criciúma' }
    ])
  }
}
