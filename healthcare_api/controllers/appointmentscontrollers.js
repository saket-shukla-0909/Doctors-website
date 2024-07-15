const appointment = require('../config/mongodb3_config');
exports.appointmentlist =(request, response)=>{
    response.send(`This is an appointmentlist api`);
}

exports.registration= async(request, response)=>{
    const appointmentregistration = {appointmentname:request.body.appointmentname,appointnumber:request.body.appointnumber,
        appointtime:request.body.appointtime, appointreason:request.body.appointreason
    }
    const Appointment = new appointment(appointmentregistration);
    Appointment.save();
    response.send(`Your appointment has successfully created`)
}
