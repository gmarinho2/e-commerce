import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ isPrimary: false })
  declare price: string

  @column({ isPrimary: false })
  declare name: string

  @column({ isPrimary: false })
  declare description: string

  @column({ isPrimary: false })
  declare team: number

  @column({ isPrimary: false })
  declare category: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}