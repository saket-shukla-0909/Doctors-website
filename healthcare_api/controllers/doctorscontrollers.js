const doctor = require('../config/mongodb2_config');
const multer = require('multer');

exports.doctorlist =  async(request, response)=>{
    const alldoctors = await doctor.find();
    response.send(JSON.stringify({'status':200, 'error':'', 'message':alldoctors}));
}
exports.singledoctorlist = async(request, response)=>{
    const alldoctors = await doctor.findById(request.params.id);
    response.send(JSON.stringify({'status':200, 'error':'', 'message':alldoctors}));
}
exports.registration = async(request, response)=>{
    const registrationData = { doctorName:request.body.doctorName, doctorSpeciality:request.body.doctorSpeciality, 
        doctorNumber:request.body.doctorNumber, email:request.body.email, password:request.body.password, experience: request.body.experience, language: request.body.language,
        typesof: request.body.typesof, address: request.body.address, biography: request.body.biography, degree: request.body.degree
    }
    const Doctor = new doctor(registrationData);
    Doctor.save();
    response.send(`Doctor's has successfully created`);
    console.log(req.file)
}
exports.deletedoctor = async(request,response)=>{
    let doctor_id = {id: request.params.id};
    const deletedoctor = await doctor.findByIdAndDelete(request.params.id);
    response.send(JSON.stringify({'status':200, 'error':'', 'message':deletedoctor}));
}
exports.updatedoctor = async(request, response)=>{
    const registrationData = { doctorName:request.body.doctorName, doctorSpeciality:request.body.doctorSpeciality,
        doctorNumber:request.body.doctorNumber, email:request.body.email, password:request.body.password, experience: request.body.experience, language: request.body.language,
        typesof: request.body.typesof, address: request.body.address, biography: request.body.biography, degree: request.body.degree, images: request.file.path
    }
    const doctorupdated = await doctor.findByIdAndUpdate(request.params.id, registrationData);
    response.send(JSON.stringify({'status':200, 'error':'', 'message':doctorupdated}))
}
exports.logindoctor= async(request, response)=>{
    
    const alldoctors = await doctor.findOne(({email:request.body.email}));
    if(request.body.password==alldoctors.password){
        response.send(JSON.stringify({'status':200, 'error':'', 'message':alldoctors}))
    }else{
        response.send(JSON.stringify({'status':200, 'error':'', 'message':'either username or password is wrong'}))
    }
}

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './public/uploads')
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }
} 
)
exports.imageupload = multer({storage:storage}).single('images')