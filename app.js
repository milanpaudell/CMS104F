const { connectDatabase } = require('./database/database');
const Blog = require('./model/blogModel');


const express = require('express')
// const mongoose = require('mongoose')
const app = express();



// nodeJs lai form bata aako data parse gar vaneko ho 
app.use(express.json());
app.use(express.urlencoded({extended:true}))

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

// GET API => /blogs (All blogs)
app.get('/blogs',async (req,res) => {
    // fetching/reading all Blogs from Blog model
    const blogs = await Blog.find()
    // check if blogs contains data or not
    if(blogs.length == 0){
        res.status(404).json({
            // status : 404,
            message : 'Empty blogs',

        })
    }
    else {
        res.status(200).json({
            // status : 200,
            message : 'Blog fetched successfully',
            data : blogs
        })
    }
})


// GET API -> /blogs/:id (single blog)
app.get('/blogs/:id',async (req,res) => {
    // console.log(req.params.id)

    const id = req.params.id
    console.log(id)
    // const {id} = req.params   //Alternative


    // const blog = await Blog.find({_id :id})
    // if (blog.length == 0) {
    //     res.status(404).json({
    //         message : 'Blog not found',
    //     })
    // }
    // else {
    //     res.status(200).json({
    //         message : 'Blog fetched successfully',
    //         data : blog
    //     })
    // }

    // Alterntive
    const blog = await Blog.findById(id) 
    if(blog){
        res.status(200).json({
            message : 'Blog fetched successfully',
            data : blog
        })
    }
    else{
        res.status(404).json({
            message : 'Blog not found'
        })
    }

})


// CRETE Blog API
app.post('/createBlog', async(req,res) => {
    const title = req.body.title
    const subTitle = req.body.subTitle
    const description = req.body.description
    
    // const {title,subTitle,description} = req.body        // Alternative

    // Insert to database logic goes here
    await Blog.create({
        title : title,
        subTitle : subTitle,
        description : description
    })

    res.json({
        status : 201,
        message : 'Blog creates successfully'
    })

    // res.status(200).json({               //Alternative
    //     message : 'Blog creates successfully'
    // })
})


app.listen(2000,() => {
    console.log('NodeJS listening on port 2000')
})