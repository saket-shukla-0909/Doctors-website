const patient = require('../config/mongodb_config');

exports.patientlist= async(request, response)=>{
    let allpatients = await patient.find();
    response.send(JSON.stringify({'status':200, error:'', "message":allpatients}));
}

exports.singlepatientlist = async(request, response)=>{
    let allpatients = await patient.find({docid:request.params.id});
    // const allpatients = await doctor.findById(request.params.id);
    response.send(JSON.stringify({'status':200, 'error':'', "message":allpatients}));
}

exports.singlepatient = async(request, response)=>{
    let allpatients = await patient.findById(request.params.id);
    response.send(JSON.stringify({'status':200, 'error':'', "message":allpatients}));
}

exports.registration = async(request, response)=>{
    let registrationData = {docid: request.body.docid, docname: request.body.docname, patientname: request.body.patientname, age:request.body.age, number:request.body.number,
        symptoms: request.body.symptoms, treatment: request.body.treatment, gender:request.body.gender, passwordp:request.body.passwordp, date:request.body.date, gender:request.body.gender
    }
    console.log(registrationData);
    const Patient = new patient(registrationData);
    Patient.save();
    response.send(`User has successfully created`)
}

exports.deletepatient= async(request, response)=>{
    let patient_id = {id:request.params.id}
    const deletepatient = await patient.findByIdAndDelete(request.params.id);
    response.send(JSON.stringify({'status':200, 'error':'', 'message':deletepatient}));
    console.log(`The user has successfully deleted`);
}

exports.updatepatient= async(request, response)=>{
    let registrationData = { patientname: request.body.patientname, age:request.body.age, number:request.body.number, date: request.body.date, 
        symptoms: request.body.symptoms, treatment: request.body.treatment, gender: request.body.gender,passwordp:request.body.passwordp,
    }
    const userupdated = await patient.findByIdAndUpdate(request.params.id, registrationData);
    response.send(JSON.stringify({'status':200, 'error':'', 'messgae':userupdated}));
}

exports.login = async(request, response)=>{
    const allpatients = await patient.findOne(({number:request.body.number}));
    if(request.body.passwordp == allpatients.passwordp){
        response.send(JSON.stringify({'status':200, 'error':'', 'message':allpatients}));
    }else{
        response.send(JSON.stringify({'status':200, 'error':'', 'message':'either number or password is wrong'}));
    }
}