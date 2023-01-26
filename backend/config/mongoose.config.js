const mongoose = require('mongoose');

//This will create a database named "authors" if one doesn't already exist (no need for mongo shell!):

mongoose.connect("mongodb://127.0.0.1:27017/user", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("You are now connected to the database"))
    .catch(err => console.log("Something went wrong, check your configuration", err));