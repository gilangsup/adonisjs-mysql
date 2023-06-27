import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Mobil extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({})
  public name: string

  @column({})
  public approval: number

  @column({})
  public purpose: string


  @column({})
  public start_date: Date

  @column({})
  public end_date: Date

  @column({})
  public start_time: DateTime

  @column({})
  public from_location: string

  @column({})
  public to_location: string

  @column({})
  public driver_name: string

  @column({})
  public department: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public static table = 'employes'
}
