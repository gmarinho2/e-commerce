import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        fullName: 'Heber Sales',
        email: 'heberssales@gmail.com',
        password: '123', 
        admin: false,
        teamId: 1, 
      },
      {
        fullName: 'Gabriel Marinho',
        email: 'gabrielmarinho910@gmail.com',
        password: '123', 
        admin: true,
        teamId: 2, 
      },
      {
        fullName: 'Filipe Braida',
        email: 'filipebraida@gmail.com',
        password: '123', 
        admin: true,
        teamId: 2, 
      },
    ])
  }
}
