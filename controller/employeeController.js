const db = require("../models/Emplorees");
const connectDB = require("../config/db");

// add new employee Controller
const addEmpController = (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const contact = req.body.contact;
    const json_date = req.body.date;
    const role = req.body.role;
    const salary = req.body.salary;

    db.addEpm(name, email, contact, json_date, role, salary),
      (err, result) => {
        if (err) {
          res.status(402).json({
            message: "Something went wrong!",
            error: err.message,
          });
        } else {
          res.status(201).json({
            message: "add new employee successfully!",
            employee: result,
          });
        }
      };
  } catch (error) {
    res.status(500).json({
      message: "Internal serber Error",
      error: error.message,
    });
  }
};

// get All employee Controller
const getAllEmpController = (req, res) => {
  try {
    db.getAllEmp((err, result) => {
      if (err) {
        res.status(402).json({
          message: "Something went wrong!",
          error: err.message,
        });
      } else {
        res.status(201).json({
          message: "get all employee details!",
          employee: result,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal serber Error",
      error: error.message,
    });
  }
};

// get single employee Controller
const getSingleEmpController = (req, res) => {
  try {
    const id = req.params.id;

    db.getSingleEmp(id, (err, result) => {
      if (err) {
        res.status(402).json({
          message: "Something went wrong!",
          error: err.message,
        });
      } else {
        res.status(201).json({
          message: "get single employee details!",
          employee: result,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal serber Error",
      error: error.message,
    });
  }
};

// Update employee details Controller
const updateEmpController = (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const contact = req.body.contact;
    const json_date = req.body.date;
    const role = req.body.role;
    const salary = req.body.salary;

    const id = req.params.id;

    db.updateEpm(id, name, email, contact, json_date, role, salary),
      (err, result) => {
        if (err) {
          res.status(402).json({
            message: "Something went wrong!",
            error: err.message,
          });
        } else {
          res.status(201).json({
            message: "Upadte employee details successfully!",
            employee: result,
          });
        }
      };
  } catch (error) {
    res.status(500).json({
      message: "Internal serber Error",
      error: error.message,
    });
  }
};

// Delete employee Controller
const deleteEmpController = (req, res) => {
  try {
    const id = req.body.id;

    db.deleteEmp(id, (err, result) => {
      if (err) {
        res.status(402).json({
          message: "Something went wrong!",
          error: err.message,
        });
      } else {
        res.status(201).json({
          message: "Delete employee details!",
          employee: result,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal serber Error",
      error: error.message,
    });
  }
};

// // get employee  leave Controller
const getLeaveEmpController = (req, res) => {
  try {
    db.getAllEmpLeave((err, result) => {
      if (err) {
        res.status(402).json({
          message: "Something went wrong!",
          error: err.message,
        });
      } else {
        res.status(201).json({
          message: "get all employee leave details!",
          employee: result,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal serber Error",
      error: error.message,
    });
  }
};
// // get employee  leave Controller
const addLeaveEmpController = (req, res) => {
  try {
    const name = req.body.name;
    const leave_type = req.body.leave_type;
    const form = req.body.form;
    const to = req.body.to;
    const reason = req.body.reason;

    db.addEmpLeave(name, leave_type, form, to, reason, (err, result) => {
      if (err) {
        res.status(402).json({
          message: "Something went wrong!",
          error: err.message,
        });
      } else {
        res.status(201).json({
          message: "add employee leave details!",
          employee: result,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal serber Error",
      error: error.message,
    });
  }
};

// // Update employee  leave Controller
const updateLeaveEmpController = (req, res) => {
  try {
    const name = req.body.name;
    const leave_type = req.body.leave_type;
    const form = req.body.form;
    const to = req.body.to;
    const reason = req.body.reason;

    const id = req.body.id;
    db.updateEmpLeave(id, name, leave_type, form, to, reason, (err, result) => {
      if (err) {
        res.status(402).json({
          message: "Something went wrong!",
          error: err.message,
        });
      } else {
        res.status(201).json({
          message: "update employee leave details!",
          employee: result,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal serber Error",
      error: error.message,
    });
  }
};

// // delete employee  leave Controller
const deleteEmpLeaveController = (req, res) => {
  try {
    const id = req.body.id;

    db.deleteEmpLeave(id, (err, result) => {
      if (err) {
        res.status(402).json({
          message: "Something went wrong!",
          error: err.message,
        });
      } else {
        res.status(201).json({
          message: "Delete employee leave details!",
          employee: result,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal serber Error",
      error: error.message,
    });
  }
};

// Search employe 
const searchEmpController = (req, res) => {
    try {
      const key = req.body.search;
  
      db.searchEmp(key, function (err, result) {
        console.log(result);
  
        res.status(200).json({
          message: "search Employee by key!",
          list: result,
        });
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error.message,
      });
    }
  };

module.exports = {
  addEmpController,
  getAllEmpController,
  getSingleEmpController,
  updateEmpController,
  deleteEmpController,
  getLeaveEmpController,
  addLeaveEmpController,
  updateLeaveEmpController,
  deleteEmpLeaveController,
  searchEmpController
};
