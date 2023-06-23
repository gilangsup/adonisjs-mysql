import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProfileController {
  public async index({ auth }: HttpContextContract) {
    return auth.user
  }
}
