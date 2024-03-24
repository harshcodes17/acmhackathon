const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require('./models/employee')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://yashkiran2004:acm@cluster0.zkumq4a.mongodb.net/employee");

app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("password not valid")
            
            }
        }else{
            res.json("No record exist")
        }
    })
})

app.post('/register', (req,res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err));
})
app.listen(3001,()=>{
    console.log("Server is running fine")
})

