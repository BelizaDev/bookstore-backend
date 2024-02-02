const express = require("express");
const mongoose = require("mongoose");
const bookRouter = require("./routes/books");
const cors = require('cors');
require("dotenv").config()

const app = express();
// Configure CORS
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend's origin
  methods: 'GET,POST,PUT,DELETE',
  credentials: true // Allow sending cookies with requests
}));


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

//mongoose.connect("mongodb+srv://belizadevelopers:CI3Q3CsxsSoL8Bpc@book-managment.qavymll.mongodb.net/?retryWrites=true&w=majority")
mongoose.connect(process.env.PROCESS_URI)
.then(console.log("Database connection is successful"))
.catch((err) => console.log(err))

//middlewares
app.use(express.json());
app.use('/api/book', bookRouter)