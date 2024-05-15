const express = require("express");
const {
  addEmpController,
  getAllEmpController,
  getSingleEmpController,
  updateEmpController,
  deleteEmpController,
  getLeaveEmpController,
  addLeaveEmpController,
  updateLeaveEmpController,
  deleteEmpLeaveController,
  searchEmpController,
} = require("../controller/employeeController");
const router = express.Router();

module.exports = router;

// ROUTES

// EMPLOYEES
// add new employee route
router.post("/addEmp", addEmpController);

// get all employee route
router.get("/getAllEMP", getAllEmpController);

// get single employee route
router.get("/getSingleEMP/:id", getSingleEmpController);

// Upadte employee route
router.put("/updateEMP/:id", updateEmpController);

// delete employee route
router.delete("/deleteEMP/:id", deleteEmpController);

router.get("/searchEMP", searchEmpController);

// EMPLOYEE LEAVE

// add new employee leave route
router.post("/addEmpLeave", addLeaveEmpController);

// get all employee leave route
router.get("/getAllEMPLeave", getLeaveEmpController);

// get single employee leave route
// router.get('/getSingleEMPLeave/:id',getSingleEmpController);

// Upadte employee leave route
router.put("/updateEMPLeave/:id", updateLeaveEmpController);

// delete employee leave route
router.delete("/deleteEMPLeave/:id", deleteEmpLeaveController);
