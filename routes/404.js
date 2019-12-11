module.exports = [
    {
        method: '*',
        path: '/{any*}',
        handler(request, h) {
            const data = { status: 404, message: 'Wrong route, bro!' }
            return h.response(data).code(404)
        },
    },
]
