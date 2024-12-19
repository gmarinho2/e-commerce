import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name')
      table.decimal('price', 10, 2).notNullable()
      table.integer('category_id').unsigned().notNullable().references('id').inTable('categories').onDelete('CASCADE')
      table.string('description')
      table.integer('team_id').unsigned().references('id').inTable('teams').onDelete('CASCADE')
      table.integer('stock')
      table.text('image_url').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}