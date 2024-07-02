const mongoose = require('mongoose');
const Employee = require('./employee');

const uri = "mongodb://localhost:27017/employeeDB";

mongoose.connect(uri,{'dbName':'employeeDB'})
.then(()=>{
    console.log("Connected to MongoDB!")
    return Employee.updateOne({
        emp_name:"John Doe"},{email: "jedi@binarysunset.com"}
    )
})
.then(()=>{
    return Employee.updateOne({
        emp_name:"Dovah"},{location: "Windhelm"}
    )
})
.then((updateOneResult)=>{
    console.log("update Docs for updateOne:", updateOneResult);
    console.log("one record updated");

    return Employee.updateMany({age: {$gt:33}}, {location: "New York"})
})
.then((updatedManyResult)=>{
    console.log("Updated docs for updateMany: ",updatedManyResult);
    console.log("Many docs updated!")
})
.catch((err)=>{
    console.log("Error: ",err)
})
.finally(()=>{
    mongoose.connection.close();
})