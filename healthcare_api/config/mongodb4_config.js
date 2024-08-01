const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/doctors',{});
const patientregistSchema ={
    birth: String,
    blood: String,
    height: String,
    width: String,
    patientid: String,
    addressp: String,
    aboutp: String
}
const patientregist = mongoose.model('patientregist', patientregistSchema)
module.exports = patientregist;