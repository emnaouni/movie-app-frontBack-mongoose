const express = require('express')
const mongoose = require('mongoose')
const app = express()
const mongoURI = 
"mongodb+srv://emna123:emna123@cluster0-01lon.mongodb.net/test?retryWrites=true&w=majority";
app.use(express.json())
mongoose.connect(mongoURI,
     { useUnifiedTopology: true, useNewUrlParser: true },
     (err) => {
    if (err) throw err;
    console.log('Database connected');
})

//Define Routes

app.use("/movies", require("./routes/movies"));

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})