const patientregist = require('../config/mongodb4_config') 

exports.patientregistlist = async (request, response)=>{
    const allpatientregistlist = await patientregist.find();
    response.send(JSON.stringify({'status':200, 'error':'', 'message':allpatientregistlist}));
}

exports.singlepatientregist= async (request,response)=>{
    const allpatientregist = await patientregist.findById(request.params.id);
    response.send(JSON.stringify({'status':200, 'error':'', 'message':allpatientregist}));
}

exports.patientregistregistration=(request, response)=>{
    const registrationData = {firstname:request.body.firstname, about:request.body.about, lastname:request.body.lastname, dob:request.body.dob, email:request.body.email, password:request.body.password, gender:request.body.gender,
         age:request.body.age, contact:request.body.contact, address:request.body.address};
    const Patientregist = new patientregist(registrationData);
    Patientregist.save();
    response.send('Patient registration has done successully')
}

exports.deletepatientregist= async(request, response)=>{
    let patientregist_id = {id: request.params.id};
    const deletepatientregist = await patientregist.findByIdAndDelete(request.params.id);
    response.send(JSON.stringify({'status':200, 'error':'', 'message':deletepatientregist}));

}
exports.updatepatientregist= async(request, response)=>{
    const registrationData = {firstname:request.body.firstname, lastname:request.body.lastname,about:request.body.about, dob:request.body.dob, email:request.body.email, password:request.body.password, gender:request.body.gender,
         age:request.body.age, contact: request.body.contact, address:request.body.address};
      
    const patientregistupdated = await patientregist.findByIdAndUpdate(request.params.id, registrationData);
    response.send(JSON.stringify({'status':200, 'error':'', 'message':patientregistupdated}))
}
exports.loginpatientregist= async (request, response)=>{
    const allpatient = await patientregist.findOne(({email:request.body.email}));
    if(request.body.password==allpatient.password){
        response.send(JSON.stringify({'status':200, 'error':'', 'message':allpatient}))
    }else{
        response.send(JSON.stringify({'status':200, 'error':'', 'message':'either username or password is wrong'}))
    }
}