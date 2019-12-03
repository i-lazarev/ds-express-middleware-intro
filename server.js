const express = require("express");
const api = express();

api.listen(3000, () => console.log("Started on 3000"));

api.use(express.urlencoded());
const dataCheck = (req, res, next) => {
  if (req.body.firstname && req.body.lastname) {
    req.fullname = req.body.firstname +" "+ req.body.lastname;
  }
  next();
};

api.use("/person", dataCheck);

api.get("/", (req, res) => {
  res.send("<h1>Homepage</h1>");
});

api.get("/person", (req, res) => {
  res.send(`<h2>Log in</h2>
<form action="/person" method="POST">
  First name:<br>
  <input type="text" name="firstname"><br>
  Last name:<br>
  <input type="text" name="lastname"><br>
  <input type="submit" value="Submit">
</form> `);
});

api.post("/person", (req, res) => {
  res.send(
    `<h1>Wellcome ${req.fullname}</h1>`
  );
});
