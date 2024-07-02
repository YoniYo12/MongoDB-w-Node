const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Employee= require("./employee");
const uri = "mongodb://localhost:27017/employeeDB";

mongoose.connect(uri,{'dbName':'employeeDB'});

let newEmployee = new Employee({
    emp_name: 'John Doe',
    age: 37,
    location: "Illinois",
    email: "jdoe@somewhere.com"
});

newEmployee.save()
.then(function (){
    Employee.find().then((data)=>{
        console.log("\n\nDocuments in employees collection after insertOne")
        console.log(data);
        mongoose.connection.close()
    }).catch((err)=>{
        console.log(err);
    })
})