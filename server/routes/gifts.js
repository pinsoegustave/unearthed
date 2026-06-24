import express from 'express'
import path from 'path'
import GiftsControllers from '../controllers/gifts.js'


const router = express.Router()

router.get('/', GiftsControllers.getGifts)

router.get('/:giftId', GiftsControllers.getGiftById);

router.post('/', GiftsControllers.createGift);

router.delete('/:id', GiftsControllers.deleteGift);

router.patch(':id', GiftsControllers.updateGift);

export default router
