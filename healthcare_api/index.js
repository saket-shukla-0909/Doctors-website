const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;
app.use(express.json())

app.use(cors());


app.use('/patients',require('./routes/patientroutes')); 
app.use('/doctors', require('./routes/doctorroutes'));
app.use('/appointments', require('./routes/appointroutes')); 
app.use('/patientregists', require('./routes/patientregistroutes'));


app.listen(port,(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log(`server has started at ${port}`);
    }
})

