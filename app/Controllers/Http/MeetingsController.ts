// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone";
import Database from "@ioc:Adonis/Lucid/Database";

export default class MeetingsController {
    public async index({ response }: HttpContext) {
        try {
            const room = await Database.from('meetings as s').select('*')
            return response.status(200).json({
                code: 200,
                status: "success",
                data: room
            })
        } catch (error) {
            return response.status(500).json({
                code: 500,
                status: "error",
                message: error.message
            })
        }
    }
}
