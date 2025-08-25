import express from "express"

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
export default app ; 