import express from 'express'
import Blog from '../models/blog.js'

const blogRouter = express.Router()

blogRouter.get('/', (req, res) => {
  Blog.find({}).then((blogs) => {
    res.json(blogs)
  })
})

blogRouter.post('/', (req, res) => {
  const blog = new Blog(req.body)

  blog.save().then((result) => {
    res.status(201).json(result)
  })
})

export default blogRouter