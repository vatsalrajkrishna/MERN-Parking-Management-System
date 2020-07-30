const express = require("express")
const morgan = require("morgan")
const bodyParder = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")

require('dotenv').config()

//Routes
const postRoutes = require('./routes/post')
const authRoutes = require('./routes/auth')

const app=express()
//DATABASE
mongoose
.connect(process.env.DATABASE, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify: false, 
    useUnifiedTopology: true
})
.then(() => 
console.log('Database Connected')
)
.catch((err)=>
console.log(err)
)

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParder.json())

app.use('/api', postRoutes)
app.use('/api', authRoutes)

const port = process.env.PORT || 5000
app.listen(port, () =>
console.log(`Server is running on port ${port}`)
);

