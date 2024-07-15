const express = require('express');
const patientregistcontrollers = require('../controllers/patientregistcontrollers');
const router = express.Router();
router.get('/patientregistlist', patientregistcontrollers.patientregistlist);
router.get('/singlepatientregist/(:id)', patientregistcontrollers.singlepatientregist);
router.post('/patientregistregistration', patientregistcontrollers.patientregistregistration);
router.put('/updatepatientregist/(:id)', patientregistcontrollers.updatepatientregist);
router.post('/loginpatientregist', patientregistcontrollers.loginpatientregist);
module.exports = router;