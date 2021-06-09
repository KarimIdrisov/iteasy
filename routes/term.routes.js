const {Router} = require('express')
const router = Router()
const Term = require('../models/Term')

// get all terms
router.get('/', async (req, res) => {
    try {
        const terms = await Term.find({})
        console.log(terms)
        res.json({
            terms: terms
    })
    } catch (e) {
        res.status(200).json({message: 'Server Error with findOne' + e.message})
    }
})

module.exports = router
