const {Router} = require('express')
const router = Router()
const Term = require('../models/Term')

// get 3 random terms
router.get('/', async (req, res) => {
    try {
        const terms = await Term.findOne({ name: 'Artificial Intellegence'})
        res.json(terms)
    } catch (e) {
        res.status(200).json({message: 'Server Error with findOne' + e.message})
    }
})

// get term by id
router.get('/:id', async (req, res) => {
    try {
        const term = await Term.findById(req.params.id)
        res.json(term)
    } catch (e) {
        res.status(200).json({message: 'Server Error'})
    }
})

module.exports = router
