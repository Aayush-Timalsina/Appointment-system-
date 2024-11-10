import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adimnRouter from './routes/adminRoute.js'


//app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors())

// API endpoint
app.use('/api/admin', adimnRouter) 


app.get('/', (req, res) => {
    res.send('API WORKING')
})

app.listen(port, () => console.log("Server Started", port))
