const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const uploadRoutes = require('./routes/uploadRoutes');


const app = express();
const port = 5000;
app.use(cors());

// Connect to MongoDB
mongoose.connect("add your database")
.then(()=>{
    console.log("server is connected to database")
    
}).catch((error)=>{
    console.log(error);

})

// Middleware to parse JSON and handle URL-encoded data
app.use(express.json());


// Use the file upload route
app.use(uploadRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
