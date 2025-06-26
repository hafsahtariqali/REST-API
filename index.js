const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8000;

//Middleware
app.use(express.urlencoded({extended: false}));

//Routes
app.get("/api/users", (req, res)=>{
  return res.json(users);
})

app.get("/users", (req, res)=>{
  const html = `
  <ul>
    ${users.map(user=> `<li>${user.first_name}</li>`).join("")};
  </ul>
  `
  res.send(html);
})

app
.route("/api/users/:id")
.get((req, res)=>{
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
})
.patch((req,res)=>{
  const id = Number(req.params.id);
  const updates = req.body;
  const user = users.find((user) => user.id === id);
  Object.assign(user, updates);
  return res.json(user);
})
.delete((req,res)=>{
  const id = Number(req.params.id);
  const index = users.findIndex(user => user.id === id);
  const deletedUser = users.splice(index,1);
  return res.json({message:"User deleted", user: deletedUser[0]});
});

app.post("/api/users", (req, res)=>{
  const body = req.body;
  users.push( {...body, id:users.length + 1});
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data)=>{
    return res.json({status : "success", id: users.length});
  });
})

app.listen(PORT, ()=>console.log(`Server started at port:${PORT}`));