import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import blogRouter from './controllers/blog.js'
import config from './utils/config.js'

const app = express()

mongoose.connect(config.MONGODB_URI)

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogRouter)

export default app