var express = require('express');
var router = express.Router();
const connection = require("../connect.js");

//get users
router.get("/", (req, res) => {
  connection.query("SELECT * FROM user", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  })
});



//get users ById
router.get("/:id", (req, res) => {
  connection.query("SELECT * FROM user WHERE id=?", [req.params.id], (err, result) => {
    if (err) {
      return;
    }
    res.send(result)
  })
});


//update users 
router.put("/:id", function (req, res) {

  const { name, role } = req.body;
  let todo = [name, role, req.params.id];
  let sql = "UPDATE users SET  name=?,email=? WHERE id=?";
  connection.query(sql, todo, (err, result) => {

    if (err) {
      return err;
    }
    res.send({ message: "update user success" })
  })

});


//delete user ById
router.delete("/:id", function (req, res) {
  let todo = [req.params.id];
  let sql = "DELETE FROM user  WHERE id=?";
  connection.query(sql, todo, (err, result) => {

    if (err) {
      return err;
    }
    res.send({ message: "delete user success" })
  })

});


//create user
router.post("/", function (req, res) {
  const { name, email, password } = req.body;
  let todo = [name, email, password];
  let sql = "INSERT INTO user (name,email,password) VALUES (?,?,?)";

  connection.query(sql, todo, (err, result) => {
    if (err) {
      return;
    }
    res.send({ message: "create users success " + result.insertId });
  });
});


//login user 
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let todo = [email, password];
  let sql = "SELECT * FROM user WHERE email=?  AND password=?";
  connection.query(sql, todo, (err, result) => {
    if(result){
      res.send(result);
    }
  });
});


module.exports = router;


