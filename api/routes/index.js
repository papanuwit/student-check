var express = require('express');
var router = express.Router();
const connection = require("../connect.js");


/* GET student_check */
router.get('/', function (req, res) {
  connection.query("SELECT * FROM student_check,students WHERE student_check.studentId=students.studentId", (err, result) => {
    if (err) {
      console.log(err)
    }
      res.send(result)
  })
});


/* GET student */
router.get("/getStudent",  function (req,res){
  connection.query("SELECT * FROM students", (err, result) => {
    if (err) {
      console.log(err)
    }
      res.send(result)
  })
});




/* GET student_check ID */
router.get('/:Id', function (req, res) {
  connection.query("SELECT * FROM student_check WHERE studentId=?",[req.params.Id],(err, result) => {
    if (err) {
      console.log(err)
    }
      res.send(result)

  })
});



//create student_check
router.post("/", function (req, res) {
  const { studentId,status } = req.body;
  let todo = [studentId,status];
  let sql = "INSERT INTO student_check (studentId,status) VALUES (?,?)";
  connection.query(sql,todo,(err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  })
});



//update student_check for status 
router.put("/:id", function (req, res) {
  const { status } = req.body;
  let todo = [status,req.params.id];
  let sql = "UPDATE student_check SET status=? WHERE studentId=?";
  connection.query(sql, todo, (err, result) => {
    if (err) {
       return err;
    }
    res.send({ message: "update student_check success" })
  })

});


//delete students ById
router.delete("/:id", function (req, res) {
  let todo = [req.params.id];
  let sql = "DELETE FROM student_check  WHERE studentId=?";
  connection.query(sql, todo, (err, result) => {

    if (err) {
      return err;
    }
    res.send({ message: "delete student_check success" })
  })

});



module.exports = router;
