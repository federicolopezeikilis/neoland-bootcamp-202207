const { validateObjectId } = require('../validators')

function retrieveUser(userId) {
    validateObjectId(userId)
    
    return Promise.resolve({ name: 'To Do', email: 'to@do.com' })
}

module.exports = retrieveUser