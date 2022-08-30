const { User, Note } = require('../models')
const { NotFoundError, SystemError } = require('../errors')
const { validateObjectId } = require('../validators')

function createNote(userId) {
    validateObjectId(userId, 'user id')

    // return User.findById(userId).lean()
    //     .catch(error => {
    //         throw new SystemError(error.message)
    //     })
    //     .then(user => {
    //         if (!user) throw new NotFoundError(`user with id ${userId} not found`)

    //         return Note.create({ user: user._id })
    //             .catch(error => {
    //                 throw new SystemError(error.message)
    //             })
    //     })
    //     .then(note => { })

    return Note.create({ user: userId })
        .then((noteId) => {
            debugger
            console.log(noteId)
        })
        .catch(error => {
            debugger
            throw new SystemError(error.message)
        })

}

module.exports = createNote