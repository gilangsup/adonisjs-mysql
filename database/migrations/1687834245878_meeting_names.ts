import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'meeting_names'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('meeting_name', 50)
      table.dateTime('date');
      table.timestamp('time');
      table.string('submitter', 30);
      table.integer('guest')
      table.string('purpose', 50)
      table.integer('room_id')
      table.string('tamu', 50)
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
