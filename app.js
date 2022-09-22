import dotenv from 'dotenv'
dotenv.config()
import  express  from 'express'
import cors from 'cors'
import { mongoose } from 'mongoose'
const app = express()
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/connectDB.js'

const port = process.env.PORT

const databaseUrl = process.env.DATABASE_URL

app.use(cors())

app.use(express.json()) 
 
connectDB(databaseUrl)
app.use(express.json())
app.use('/api/user',userRoutes)
app.listen(port,() => {
  console.log(`server is running on port ${port}`);
}) 