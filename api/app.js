const express = require('express')
const session = require('express-session')
const app = express()
const port = 9001

//Middlewares
app.use(express.json());

//cookies number of times visited in localhost:9001/count
app.use(session({
  secret:'12345',
  resave: true,
  saveUninitialized: true
}))

app.get('/count',(req,res)=>{
  req.session.user= 'Alan Ruiz';
  req.session.role='Node.js trainee';
  req.session.times=req.session.times ? ++req.session.times :1;
  res.setHeader('Content-type','text/html');
  res.send("User "+req.session.user+" with the role "+ req.session.role+" has visited this page <strong>"+ req.session.times+"</strong> times");
})

app.get('/', (req, res) => {
  const object ={
    name: "alan",
    age:23
  }
  res.send(object)
  //sended object can be seen in postman
})


app.post('/',(req, res) =>{
  const data =req.body;
  //data sended by postman
  console.log(data)
  res.send(data)
})

app.put('/',(req, res) =>{
  const data =req.body;

  res.send(data)
  console.log("You entered to put method, value updated")
})

app.delete('/',(req, res) =>{
  const data =req.body;
  //data sended by postman
  console.log("Here the data should be deleted")
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


