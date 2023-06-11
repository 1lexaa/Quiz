import express from 'express'
import mongoose from 'mongoose'
//

const app = express()

app.use(express.json())

const DB_URL = "mongodb+srv://admin:5PPrcFfQcS3sHIBo@db.xl5bjqi.mongodb.net/?retryWrites=true&w=majority";
const PORT =  3000 // process.env.PORT 

const start = async () => {
  try {
    await mongoose.connect(DB_URL)
    console.log(mongoose.connection.readyState)
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()