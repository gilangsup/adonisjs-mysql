import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone";
import Database from "@ioc:Adonis/Lucid/Database";
import Room from 'App/Models/Room'

export default class MeetingsController {
    public async index({ response }: HttpContextContract) {
        try {
            const room = await Database.from('meeting_rooms as s').select('*')
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

    public async store({ request, response }: HttpContext) {
        const roomName = request.input('room_name')
        const roomCapacity = request.input('room_capacity')
        const roomDisplay = request.input('room_display')
        const roomPort = request.input('room_port')

        try {
            await Room.create({
                room_name: roomName,
                room_capacity: roomCapacity,
                room_display: roomDisplay,
                room_port: roomPort
            })
            return response.status(200).json({
                code: 200,
                status: "Succes",
                message: "Data added"
            })
        } catch (error) {
            return response.status(500).json({
                code: 500,
                status: "error",
                message: error.message
            })
        }
    }

    public async showMeetByFirst({ response, params }: HttpContextContract) {
        let id = params.id
        try {
            const result = await Database.query()
                .select('meeting_lists.*', 'meeting_rooms.room_name', 'meeting_rooms.room_capacity', 'meeting_rooms.room_port', 'meeting_rooms.room_display')
                .from('meeting_rooms')
                .innerJoin('meeting_lists', 'meeting_lists.RoomID', 'meeting_rooms.id')
                .orderBy('StartTime', 'asc')
                .where('meeting_lists.RoomID', id)
                .whereRaw('DATE(meeting_lists.StartDate) = CURDATE()')
                .first()


            return response.status(200).json(result);
        } catch (error) {
            return response.status(500).json({
                code: 500,
                status: 'Error',
                message: error.message,
            });
        }
    }

    // public async getDataRoom({ response, request }: HttpContextContract) {

    //     const today = new Date().toISOString().split('T')[0];

    //     try {

    //         const data = await Room.query()
    //             .whereRaw('DATE(createdAt)', today)
    //             .orderBy("id", "asc");

    //         // const meet = await  

    //         return response.status(200).json({
    //             code: 200,
    //             status: 'succecss',
    //             message: "succes"
    //         })
    //     } catch (error) {
    //         return response.status(500).json({
    //             code: 500,
    //             status: 'error',
    //             message: error.message
    //         })
    //     }
    // }
    
}
