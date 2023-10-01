const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const blogSchema = new Schema({
const blogSchema = new mongoose.Schema({
    title : {
        type : String,
        // required : true
    },

    subTitle : {
        type : String,
    },

    description : {
        type : String,
    }
},{
    timestamps : true
})

const Blog = mongoose.model('Blog', blogSchema)

// module.exports = mongoose.model('Blog',Schema)  //Alternative 
module.exports = Blog