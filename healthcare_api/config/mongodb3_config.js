const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/doctors',{});
const appointmentSchema ={
    appointmentname: String,
    appointnumber: String,
    appointtime: String,
    appointreason: String
}
const appointment = mongoose.model('appointment',appointmentSchema);
module.exports = appointment;