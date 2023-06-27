/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

/**MeetingRoom */
Route.get('room_meeting', 'RoomController.getDataRoom')
Route.get('room', 'RoomController.index')
Route.post('room', 'RoomController.store')

/**MeetingsName */
Route.post('meeting_name', 'MeetingsController.store')
Route.get('meeting_name', 'MeetingsController.index')

/**Guest */
Route.post('guest', 'GuestbooksController.store')
Route.get('guest', 'GuestbooksController.index')
Route.patch('guest/:id', 'GuestbooksController.update')
Route.delete('guest/:id', 'GuestbooksController.delete')

/**Mobil */
Route.get('mobil', 'MobilsController.index')
Route.post('mobil', 'MobilsController.store')

/**auth */
Route.post('/register', 'AuthController.register')
Route.post('/login', 'AuthController.login')
Route.get('/profile', 'ProfileController.index').middleware('auth')
