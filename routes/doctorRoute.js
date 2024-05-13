
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { notMatchController, getDoctorController, addDoctorController, getDoctorDepController, editDocterController, editGetDocterController, deleteDocterController, searchDoctorController } = require("../controller/doctorController");


// doctor route

router.get('*',notMatchController);
// get all doctor route 
router.get('/getDoctor', getDoctorController);


// get doctor dept route 
router.get('/addDoctorDept', getDoctorDepController);


// add doctor route 
router.post('/addDoctor', addDoctorController);
// edit doctor route 
router.get('/editDoctor/:id', editGetDocterController);

// edit doctor route 
router.post('/editDoctor/:id',editDocterController);

// Delete doctor route

router.post('/deleteDoctor/:id',deleteDocterController);

// search doctor route

router.get('/searchDoctor',searchDoctorController);








module.exports = router;