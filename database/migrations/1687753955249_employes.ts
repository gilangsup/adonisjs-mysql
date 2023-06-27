import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'employes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nama')
      table.integer('approval')
      table.string('company')
      table.string('purpose')
      table.string('meet_with')
      table.timestamp('start_date')
      table.timestamp('end_date')
      table.time('start_time')
      table.string('status')
      table.string('from_location')
      table.string('to_location')
      table.string('driver_name')
      table.string('department')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
