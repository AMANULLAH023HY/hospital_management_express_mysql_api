const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const {
  getDoctorController,
  addDoctorController,
  getDoctorDepController,
  editDocterController,
  deleteDocterController,
  searchDoctorController,
  getSingleDocterController,
} = require("../controller/doctorController");

// doctor route

// add doctor route
router.post("/addDoctor", addDoctorController);

// get all doctor route
router.get("/getDoctor", getDoctorController);

// get single doctor route
router.get("/getSingleDoctor/:id", getSingleDocterController);

// update doctor route
router.post("/editDoctor/:id", editDocterController);

// Delete doctor route

router.delete("/deleteDoctor/:id", deleteDocterController);

// search doctor route

router.get("/searchDoctor", searchDoctorController);

module.exports = router;
