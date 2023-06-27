import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Guestbook from 'App/Models/Guestbook'

export default class GuestbooksController {

    public async store({ response, request }: HttpContextContract) {

        const nama = request.input('nama')
        const company = request.input('company')
        const purpose = request.input('purpose')
        const meet_with = request.input('meet_with')
        const date = request.input('date')
        const time = request.input('time')

        try {
            await Guestbook.create({
                nama: nama,
                company: company,
                purpose: purpose,
                meet_with: meet_with,
                date: date,
                time: time
            })
            return response.status(200).json({
                code: 200,
                status: "succes",
                message: "Berhasil menambah data"
            })
        } catch (error) {
            return response.status(500).json({
                code: 500,
                status: "error",
                message: error.message
            })
        }
    }

    public async index({ response }: HttpContextContract) {
        try {
            const guest = await Database.from('guestbooks').select('*')
            return response.status(200).json({
                code: 200,
                status: "success",
                data: guest
            })
        } catch (error) {
            return response.status(500).json({
                code: 500,
                status: "error",
                message: error.message
            })
        }
    }

    public async update({ response, request, params }: HttpContextContract) {
        const nama = request.input('nama')
        const company = request.input('company')
        const purpose = request.input('purpose')
        const meet_with = request.input('meet_with')
        const date = request.input('date')
        const time = request.input('time')

        try {
            const guest = await Guestbook.findOrFail(params.id)
            guest.nama = nama
            guest.company = company
            guest.purpose = purpose
            guest.meet_with = meet_with
            guest.date = date
            guest.time = time
            return response.status(200).json({
                code: 200,
                status: "succes",
                message: "Berhasil mengedit data"
            })
        } catch (error) {
            return response.status(500).json({
                code: 200,
                status: "error",
                message: error.message
            })
        }
    }

    public async delete({ response, params }: HttpContextContract) {
        try {
            const guest = await Guestbook.findOrFail(params.id)
            await guest.delete()

            return response.status(200).json({
                code: 200,
                status: "success",
                message: "Data berhasil dihapus"
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
