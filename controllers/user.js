const User = require('../models/user.js')

/**
 * User controller
 */

exports.signupUser = async (email, password) => {
    const user = await User.findOne({ email, password })
    if (user) {
        throw new Error('👿 User already exists')
    }
    const newUser = await new User({
        email,
        password,
    }).save()
    console.log(`👍 New user added: ${newUser.email}`)
    return newUser
}
