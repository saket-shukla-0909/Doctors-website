const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/doctors',{})
const patientSchema ={
    docid: String,
    docname: String,
    patientname: String,
    age: String,
    number: String,
    date: String,
    symptoms: String,
    treatment: String,
    gender:String,
    passwordp: String,

}
const patient = mongoose.model("patient", patientSchema)
module.exports = patient;