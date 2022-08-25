import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import userRouter from './routes/user.js'
import tourRouter from './routes/tour.js'


const app = express()
app.use(morgan("dev"))
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use('/users', userRouter)
app.use('/tour', tourRouter)

const port = 5000;
const MONGODB_URL = "mongodb+srv://prsmart2150:prsmart08101999@cluster0.57fgfv0.mongodb.net/tour_db?retryWrites=true&w=majority\n"

mongoose.connect(MONGODB_URL)
  .then(() =>
    app.listen(port, () => console.log(`server running on port: ${port}`)))
  .catch(err => console.log(err))
