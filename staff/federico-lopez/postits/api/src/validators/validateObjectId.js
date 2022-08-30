const { Types: { ObjectId: { isValid } } } = require('mongoose')
const { AuthError } = require('../errors')

module.exports = userId => {
    if(!isValid(userId)) throw new AuthError('invalid userId')
}