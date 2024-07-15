const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/doctors',{});
const patientregistSchema ={
    firstname: String,
    lastname: String, 
    email: String,
    password: String,
    gender: String,
    age: String,
    contact: String,
    address: String,
    dob: String,
    about: String,
}
const patientregist = mongoose.model('patientregist', patientregistSchema)
module.exports = patientregist;