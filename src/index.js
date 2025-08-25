import dotenv from 'dotenv';
import connectDB from './db/index.js';
dotenv.config({
    path : "./.env"
})
import app from './app.js'

const port = process.env.PORT


connectDB()
.then(() => {
    app.listen(port , () => {
    console.log(`server is running on ${port}`)
})
})
.catch((err) => {
    console.error("mongodb connection error" , err)
    process.exit(1) ; 
})



