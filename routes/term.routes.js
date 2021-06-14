const {Router} = require('express')
const router = Router()
const Term = require('../models/Term')

// get all terms
router.get('/getTerms', async (req, res) => {
    console.log(1)
    try {
        const terms = await Term.find()
        res.json({
            terms: terms
    })
    } catch (e) {
        res.status(200).json({message: 'Server Error with findOne' + e.message})
    }
})

module.exports = router
