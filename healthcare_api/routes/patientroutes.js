const express = require('express');
const patientsController  =  require('../controllers/patientcontrollers')
const router = express.Router();
router.get('/patientlist', patientsController.patientlist);
router.get('/singlepatientlist/(:id)',patientsController.singlepatientlist);
router.post('/registration', patientsController.registration);
router.delete('/deletepatient/(:id)', patientsController.deletepatient);
router.put('/updatepatient/(:id)', patientsController.updatepatient);
router.post('/login', patientsController.login);
module.exports = router;