const mongoose = require('mongoose');
const Employee = require('./employee');

const uri = "mongodb://localhost:27017/employeeDB";

mongoose.connect(uri,{'dbName':'employeeDB'})
.then(()=>{
    console.log("Connected to MongoDB!");

    return Employee.insertMany([
            { "emp_name": "Ray Renolds", "age": 32, "location": "Austin", "email": "rayr@somewhere.com" },
            { "emp_name": "Matt Aniston", "age": 25, "location": "Houston", "email": "matta@somewhere.com" },
            { "emp_name": "Monica Perry", "age": 23, "location": "New Jersey", "email": "monicap@somewhere.com" },
            { "emp_name": "Rachel Tribbiani", "age": 28, "location": "Boston", "email": "rachelt@somewhere.com" }
    ])
})
.then(()=>{
    console.log("Records inserted succesfully");
    return Employee.find()  // Find all documents in employees collection after insertMany
})
.then((data)=>{
    console.log("\nDocuments in employees collection after insertMany:")
    console.log(data)
})
.catch((err)=>{
    console.log("Error: ",err)
})
.finally(()=>{
    mongoose.connection.close();
})
