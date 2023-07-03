import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Meeting extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({})
  public RoomID: number

  @column({})
  public StartDate: Date

  @column({})
  public EndDate: Date

  @column({})
  public StartTime: DateTime

  @column({})
  public EndTime: DateTime

  @column({})
  public Guest: string

  @column({})
  public Approval: number

  @column({})
  public Purpose: string

  @column({})
  public Order: String

  @column({})
  public CreatedByUser: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public static table = 'meeting_lists'
}
