const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
// The fields below are your keys bruh 
    firstName: { 
        type: String, 
        required: [true, "Your first name is required"],
        min:[4, "First name should be at least 4 character"], 
        max:[12, "First name should be 12 characters max"]},
    
    lastName: { 
        type: String,  
        required: [true, 'Your last name is required'],
        min:[4, 'Last name should be at least 4 characters'], 
        max:[12, 'Last name should be 12 characters max']},
    
    userName: { 
        type: String,  
        required: [true, 'Your username is required'],
        min:[4, 'Username should be at least 4 characters'], 
        max:[12, 'Username should be 12 characters max']},
    
    email: { 
        type: String,  
        required: [true, 'A Valid Email is required'],
        match: [/.+\@.+\..+/]},
    
    age: { 
        type: Number, 
        required: [true, 'Please provide an age'], 
        min:[18, 'You must be at least  18 years old'], 
        max:[99,]}

    }, { timestamps: true });

module.exports = mongoose.model('user', userSchema);