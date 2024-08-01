const patientregist = require('../config/mongodb4_config') 

exports.patientregistlist = async (request, response)=>{
    const allpatientregistlist = await patientregist.find();
    response.send(JSON.stringify({'status':200, 'error':'', 'message':allpatientregistlist}));
}

exports.singlepatientregist= async (request,response)=>{
    const allpatientregist = await patientregist.find({patientid:request.params.id});
    response.send(JSON.stringify({'status':200, 'error':'', 'message':allpatientregist}));
}

exports.patientregistregistration=(request, response)=>{
    const registrationData = {birth: request.body.birth,
        blood: request.body.blood,
        height: request.body.height,
        width: request.body.width,
        patientid: request.body.patientid,
        addressp: request.body.addressp,
        aboutp: request.body.aboutp};
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
    const registrationData = {birth: request.body.birth,
        blood: request.body.blood,
        height: request.body.height,
        width: request.body.width,
        patientid: request.body.patientid,
        addressp: request.body.addressp,
        aboutp: request.body.aboutp};
      
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