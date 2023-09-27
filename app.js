const app = require('express') ()
// const mongoose = require('mongoose')

const { connectDatabase } = require('./database/database')
// Database Connection Function
connectDatabase()

// connectig to database
// mongoose.connect('mongodb+srv://admin:<password>@cluster0.6g3gudb.mongodb.net/?retryWrites=true&w=majority')
// .then(() => {
//     console.log('Database connected')
// })



// GET API
app.get('/',(req,res) => {
    res.json({
        status : 200,
        message : 'Success'
    })
})



app.listen(2000,() => {
    console.log('NodeJS listening on port 2000')
})