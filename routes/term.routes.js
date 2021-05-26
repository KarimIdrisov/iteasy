const {Router} = require('express')
const router = Router()
const Term = require('../models/Term')

// get 3 random terms
router.get('/', async (req, res) => {
    try {
        const terms = await Term.findOne()
        res.json({
            term: terms,
            related: terms.relatedWords.split(',')
    })
    } catch (e) {
        res.status(200).json({message: 'Server Error with findOne' + e.message})
    }
})

// get term by id
router.get('/getId', async (req, res) => {
    try {
        const terms = await Term.findOne({id: req.query.id})
        console.log(terms)
        res.json({
            term: terms,
            related: terms.relatedWords.split(','),
            relatedId: terms.relatedWordsId.split(','),
        })
    } catch (e) {
        res.status(200).json({message: 'Server Error with findOne' + e.message})
    }
})

module.exports = router
