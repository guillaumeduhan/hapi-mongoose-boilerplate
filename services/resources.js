/**
 * Resources
 */

const mongoose = require('mongoose')
const chalk = require('chalk')

exports.mongoose = () => {
    /**
     * Connect to MongoDB.
    */
    mongoose.set('useFindAndModify', false)
    mongoose.set('useCreateIndex', true)
    mongoose.set('useNewUrlParser', true)
    mongoose.set('useUnifiedTopology', true)
    mongoose.connect(process.env.MONGODB_URI, () => {
        console.log(chalk.bold(chalk.green('✅ Mongo')))
    })
    mongoose.connection.on('error', (err) => {
        console.error(err)
        console.log(chalk.red('❌ MongoDB connection error. Please make sure MongoDB is running.'))
        process.exit()
    })
}
