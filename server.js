/*
 * hapi-mongoose boilerplate
 * 2019 Guillaume Duhan <myhappyagency@gmail.com>
 * MIT License
 */

/**
 * Module dependencies
 */

const Hapi = require('@hapi/hapi')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const chalk = require('chalk')
const laabr = require('laabr')

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: '.env' })

const resources = require('./services/resources.js')

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    })

    resources.mongoose()

    await server.register(require('./config/router'))
    await server.register({
        plugin: laabr,
        options: {
            formats: {
                onPostStart: ':status',
                request: ':method :remoteAddress :url :status :payload (:responseTime ms)',
                response: `:method - ${chalk.magenta(':remoteAddress')} - ${chalk.gray(':url')} - ${chalk.green(':status')} - (:responseTime ms)`,
            },
        },
    })
    await server.start()
    .then(() => console.log(chalk.bold(chalk.green('✅ Server ', chalk.yellow(server.info.uri)))))
}

process.on('unhandledRejection', (err) => {
    console.log(chalk.bold(chalk.red('❌ error:')))
    console.log(chalk.bold(err))
    throw err
    process.exit(1)
})

init()
