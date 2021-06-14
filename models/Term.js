const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    relatedWords: {type: String},
    relatedWordsId: {type: String},
    id: {type: String, unique: true},
    url: {type: String}
})

module.exports = model('Term', schema)
