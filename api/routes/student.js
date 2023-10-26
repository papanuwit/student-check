var express = require('express');
var router = express.Router();
const connection = require("../connect.js");


/* GET student ID */
router.get('/:Id', function (req, res) {
  connection.query("SELECT * FROM students WHERE studentId=?",[req.params.Id],(err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)

  })
});



//create student
router.post("/", function (req, res) {
  const { studentId, name, level } = req.body;
  let todo = [studentId, name, level];
  let sql = "INSERT INTO students (studentId, name, level) VALUES (?,?,?)";
  connection.query(sql,todo,(err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  })
});



//update users 
router.put("/:studentId", function (req, res) {
  const { name } = req.body;
  let todo = [name,req.params.studentId];
  let sql = "UPDATE students SET name=? WHERE studentId=?";
  connection.query(sql, todo, (err, result) => {
    if (err) {
       return err;
    }
    res.send({ message: "update students success" })
  })

});



//delete students ById
router.delete("/:id", function (req, res) {
  let todo = [req.params.id];
  let sql = "DELETE FROM students  WHERE studentId=?";
  connection.query(sql, todo, (err, result) => {

    if (err) {
      return err;
    }
    res.send({ message: "delete students success" })
  })

});



module.exports = router;
