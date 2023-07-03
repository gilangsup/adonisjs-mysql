import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Mobil from 'App/Models/Mobil'

export default class MobilsController {

    public async index({ response }: HttpContextContract) {
        try {
            const mobil = await Database.from('employes').select('*')
            return response.status(200).json({
                code: 200,
                status: 'success',
                data: mobil
            })
        } catch (error) {
            return response.status(500).json({
                code: 500,
                status: 'error',
                message: error.message
            })
        }
    }

    public async todays({ response }: HttpContextContract) {
        try {
            const today = new Date().toISOString().slice(0, 10);
            const mobil = await Database.from('employes').where('start_date', today)
            return response.status(200).json({
                code: 200,
                status: 'success',
                data: mobil
            })
        } catch (error) {
            return response.status(500).json({
                code: 500,
                status: 'error',
                message: error.message
            })
        }
    }

    public async store({ response, request }: HttpContextContract) {
        const name = request.input('name')
        const purpose = request.input('purpose')
        const start_date = request.input('start_date')
        const end_date = request.input('end_date')
        const start_time = request.input('start_time')
        const from_location = request.input('from_location')
        const to_location = request.input('to_location')
        const driver_name = request.input('driver_name')
        const department = request.input('department')

        try {
            await Mobil.create({
                name: name,
                purpose: purpose,
                start_date: start_date,
                end_date: end_date,
                start_time: start_time,
                from_location: from_location,
                to_location: to_location,
                driver_name: driver_name,
                department: department
            })
            return response.status(200).json({
                code: 200,
                status: 'success',
                message: 'Berhasil menambah data'
            })
        } catch (error) {
            return response.status(500).json({
                code: 500,
                status: 'error',
                message: error.message
            })
        }
    }
}
