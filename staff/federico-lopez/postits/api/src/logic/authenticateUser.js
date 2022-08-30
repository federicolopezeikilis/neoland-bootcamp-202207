const { User } = require('../models')
const { NotFoundError, AuthError, SystemError } = require('../errors')
const { validateEmail, validatePassword } = require('../validators')

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    // return new Promise((resolve, reject) => {
    //     User.findOne({ email })
    //         .catch(error => {
    //             reject(new SystemError(error.message))
    //         })
    //         .then(user => {
    //             if (!user) reject(new NotFoundError(`user with email ${email} not found`))

    //             else if (user.password !== password) reject(new AuthError('wrong password'))

    //             else resolve(user.id)
    //         })
    // })

    return (async () => {
        return User.findOne({ email })
            .catch(error => {
                throw new SystemError(error.message)
            })
            .then(user => {
                if (!user) throw new NotFoundError(`user with email ${email} not found`)

                if (user.password !== password) throw new AuthError('wrong password')

                return user.id
            })
    })()
}

module.exports = authenticateUser