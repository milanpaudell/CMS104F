const mongoose = require('mongoose')


exports.connectDatabase = async () => {
    // connectig to database 
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.6g3gudb.mongodb.net/?retryWrites=true&w=majority') // jabasamma database sanga connect hudaina wait gar
    console.log('Database connected')
}