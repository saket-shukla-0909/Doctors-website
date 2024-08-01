const patientUpdate = require('../config/mongodb4_config') 

exports.patientupdatelist = async (request, response)=>{
    const allpatientupdatelist = await patientUpdate.find();
    response.send(JSON.stringify({'status':200, 'error':'', 'message':allpatientupdatelist}));
}

exports.singlepatientupdate= async (request,response)=>{
    const allpatientupdate = await patientUpdate.findById(request.params.id);
    response.send(JSON.stringify({'status':200, 'error':'', 'message':allpatientupdate}));
}

exports.patientUpdateRegistration=(request, response)=>{
    const registrationData = {birth: request.body.birth,
        blood: request.body.blood,
        height: request.body.height,
        width: request.body.width,
        emailp: request.body.emailp,
        addressp: request.body.addressp,
        aboutp: request.body.aboutp};
    const PatientUpdate = new patientUpdate(registrationData);
    PatientUpdate.save();
    response.send('Patient update has done successully')
}

exports.deletepatientupdate= async(request, response)=>{
    let patientupdate_id = {id: request.params.id};
    const deletepatientupdate = await patientUpdate.findByIdAndDelete(request.params.id);
    response.send(JSON.stringify({'status':200, 'error':'', 'message':deletepatientupdate}));

}
exports.updatepatient= async(request, response)=>{
    const registrationData = {birth: request.body.birth,
        blood: request.body.blood,
        height: request.body.height,
        width: request.body.width,
        emailp: request.body.emailp,
        addressp: request.body.addressp,
        aboutp: request.body.aboutp};
      
    const updatepatient = await patientUpdate.findByIdAndUpdate(request.params.id, registrationData);
    response.send(JSON.stringify({'status':200, 'error':'', 'message':updatepatient}))
}
// exports.loginpatientregist= async (request, response)=>{
//     const allpatient = await patientregist.findOne(({email:request.body.email}));
//     if(request.body.password==allpatient.password){
//         response.send(JSON.stringify({'status':200, 'error':'', 'message':allpatient}))
//     }else{
//         response.send(JSON.stringify({'status':200, 'error':'', 'message':'either username or password is wrong'}))
//     }
// }