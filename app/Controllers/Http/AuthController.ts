import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    const data = request.only(['email', 'password'])

    await User.create(data)

    return response.status(201).json({ message: 'Registration successful' })
  }

  public async login({ request, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const token = await auth.use('api').attempt(email, password)
    const user = await User.findBy('email', email,)

    return {
      user: {
        id: user?.id,
        email: user?.email,
        token: token.toJSON(),
      }
    }
  }
}
