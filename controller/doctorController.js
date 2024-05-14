const db = require("../models/Doctors");
const connectDB = require("../config/db");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// const notMatchController = (req, res, next) => {
//   try {
//     if (req.cookie["username"] == null) {
//       res.status(200).json({
//         message: "Redirect to login page ",
//       });
//     } else {
//       next();
//     }
//   } catch (error) {
//     res.status(500).json({
//       message: "Internal server error",
//       error: error.message,
//     });
//   }
// };

// const storage = multer.diskStorage({
//   destination: (req, file, cd) => {
//     cd(null, "public/assets/images/upload_image");
//   },
//   filename: (req, file, cd) => {
//     console.log(file);
//     cd(null, file.originalname);
//   },
// });

// module.exports.upload = multer({ storage: storage });

// get Doctor Controller

const getDoctorController = (req, res) => {
  try {
    db.getAllDoc(function (err, result) {
      if (err) throw err;
      res.status(201).json({
        message: "All doctor!",
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

// get Doctor dept Controller

const getDoctorDepController = (req, res) => {
  try {
    db.getallDept((err, result) => {
      res.status(200).json({
        message: "get doctor dept successfully!",
        result: result,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// get Doctor dept Controller

const addDoctorController = (req, res) => {
  try {
    db.addDoctor(
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      req.body.dob,
      req.body.gender,
      req.body.address,
      req.body.phone,
      req.body.department,
      req.body.biography
    );
    if (db.addDoctor) {
      console.log("1 Doctor inserted");
    }
    res.status(200).json({
      message: "redirect to add doctor",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

//   get single doctor controller

const getSingleDocterController = (req, res) => {
  try {
    const id = req.params.id;
    db.getDoctorById(id, (err, result) => {
      res.status(200).json({
        message: "get single Doctor details!",
        doctor: result,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// update doctor details controller
const editDocterController = (req, res) => {
  try {
    const id = req.params.id;
    db.editDoctor(
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      req.body.dob,
      req.body.gender,
      req.body.address,
      req.body.phone,
      req.body.department,
      req.body.biography,
      id,
      (err, result) => {
        if (err) {
          res.status(402).json({
            message: "Something went wrong",
            error: err.message,
          });
        } else {
          res.status(200).json({
            message: "Doctor details updated successfully!",
            list: result,
          });
        }
      }
    );
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// delete doctor controller
const deleteDocterController = (req, res) => {
  try {
    const id = req.params.id;

    db.deleteDoctror(id, (err, result) => {
      if (err) {
        res.status(402).json({
          message: "something went wrong!",
          error: err.message,
        });
      }
      res.status(201).json({
        message: "delete doctor details successfully!",
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

// Search doctor controller

const searchDoctorController = (req, res) => {
  try {
    const key = req.body.search;

    db.searchDoc(key, function (err, result) {
      console.log(result);

      res.status(200).json({
        message: "search doctor by key!",
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
  getDoctorController,
  getDoctorDepController,
  addDoctorController,
  getSingleDocterController,
  editDocterController,
  deleteDocterController,
  searchDoctorController,
};
