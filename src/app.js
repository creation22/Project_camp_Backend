import express from "express"
import healthCheckRouter from './routes/healthCheck.routes.js'
const app = express() 
import cors from 'cors'
// basic config

app.use(express.json({limit :"16kb"}));
app.use(express.urlencoded({extended : true , "limit" : "16kb"}))
app.use(express.static("public"))
app.use(cors({
    origin : process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173" ,
    credentials : true , 
    methods  : ["GET" , "POST" , "PUT" ,"PATCH" , "DELETE" , "OPTION"] ,
    allowedHeaders :["Authorization" , "Content-Type"]
}))



app.use("/api/v1/healthcheck" , healthCheckRouter)

app.get("/" , (req , res) => {
    res.send("welcome to basecampy !")
})

export default app ; 