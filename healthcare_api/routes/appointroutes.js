const express = require('express');
const appointmentscontroller = require('../controllers/appointmentscontrollers')
const router = express.Router();
router.get('/appointmentlist', appointmentscontroller.appointmentlist);
router.post('/registration', appointmentscontroller.registration);
module.exports = router;