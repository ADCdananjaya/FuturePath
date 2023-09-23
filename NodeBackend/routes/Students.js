const express = require("express");
const router = express.Router();
const {
  getStudents,
  addStudent,
  getStudent,
  updateStudent,
  deleteStudent,
} = require("../controller/Students");

router.get("/:id", getStudent);
router.get("/", getStudents);
router.post("/", addStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
