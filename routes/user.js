const userController = require('../controllers/user.js')

module.exports = [
    {
        method: 'POST',
        path: '/user/signup',
        handler(req) {
            return userController.signupUser(req.query.email, req.query.password)
        },
    },
]
