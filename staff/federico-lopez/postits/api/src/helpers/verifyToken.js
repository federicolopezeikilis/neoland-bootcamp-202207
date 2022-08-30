const { verify } = require('jsonwebtoken')

module.exports = req => {
    const { headers: { authorization } } = req

    const token = authorization.substring(7)

    const payload = verify(token, 'Dan: copié el código de Mónica!')

    const { sub: userId } = payload

    return userId
}