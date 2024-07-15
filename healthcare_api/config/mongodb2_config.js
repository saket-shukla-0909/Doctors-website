const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/doctors',{});
const doctorSchema ={
    doctorName: String,
    doctorSpeciality: String,
    images: String,
    doctorNumber: String,
    email: String,
    password: String,
    experience: String,
    language: String,
    typesof: String,
    address: String,
    biography: String,
    degree: String,
}
const doctor = mongoose.model("doctors", doctorSchema);
module.exports = doctor;