import express from "express"
const app = express() 
import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT || 4000

app.get("/", (req: any, res: any) => {
    res.sendFile(__dirname + "../" + "app/" + "index.html")
})


app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})
