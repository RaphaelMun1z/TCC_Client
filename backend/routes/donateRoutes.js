const router = require('express').Router()

const Donate = require('../models/Donate')

router.post('/', async (req, res) => {

    const {
        type,
        amount,
        condition,
        date,
        local,
        comments,
        estimatedValue
    } = req.body

    if (!type) {
        res.status(422).json({ error: 'O tipo é obrigatório' })
        return
    }

    const donate = {
        type,
        amount,
        condition,
        date,
        local,
        comments,
        estimatedValue,
    }

    try {
        await Donate.create(donate)

        res.status(201).json({ message: 'Donate inserido com sucesso!' })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.get('/', async (req, res) => {
    try {
        const donates = await Donate.find()

        res.status(200).json(donates)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.get('/:id', async (req, res) => {

    const id = req.params.id

    try {
        const donate = await Donate.findOne({ _id: id })

        if (!donate) {
            res.status(422).json({ message: 'O donate não foi encontrado!' })
            return
        }

        res.status(200).json(donate)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const { name, salary, approved } = req.body

    const donate = {
        type,
        amount,
        condition,
        date,
        local,
        comments,
        estimatedValue,
    }

    try {
        const updatedDonate = await Donate.updateOne({ _id: id }, donate)

        if (updatedDonate.matchedCount === 0) {
            res.status(422).json({ message: 'O donate não foi encontrado!' })
            return
        }

        res.status(200).json(donate)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const donate = await Donate.findOne({ _id: id })

    if (!donate) {
        res.status(422).json({ error: 'O donate não foi encontrado!' })
        return
    }

    try {
        await Donate.deleteOne({ _id: id })
        res.status(200).json({ message: 'Donate deletado com sucesso!' })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

module.exports = router 