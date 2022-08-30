const { User } = require('../models')
const { NotFoundError, AuthError, SystemError } = require('../errors')
const { validateEmail, validatePassword } = require('../validators')

function updatePassword(userId, oldPassword, newPassword) {
    //TODO validate inputs

    return User.findById(userId)
        .then(user => {
            user.password = newPassword

            return user.save()
        }).
        then(() => {})
}

module.exports = updatePassword