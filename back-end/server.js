import "dotenv/config"
import express from "express"
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import cors from "cors"


const app = express()
const PORT = process.env.PORT || 3000


/* Middleware */
app.use(express.json())
app.use(cors())

/* dbConnect */
connectDB()

app.use("/api/user", userRouter)

app.get("/", async (req,res)=> {
    res.send("API is working")
})


app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`)
})

