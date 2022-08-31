import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import userRouter from './routes/user.js'
import tourRouter from './routes/tour.js'
import connection from "./utils/connection.js";
import {PORT} from "./config/index.js";

const app = express()

app.use(morgan("dev"))
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use('/users', userRouter)
app.use('/tour', tourRouter)

// const port = PORT;

app.listen(PORT, async () => {
  console.log(`server running on port: ${PORT}`)
  await connection()
})

// mongoose.connect(process.env.MONGODB_URL)
//   .then(() =>
//     app.listen(port, () => console.log(`server running on port: ${port}`)))
//   .catch(err => console.log(err))
