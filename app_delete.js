const mongoose = require('mongoose');
const Employee = require('./employee');

const uri =  "mongodb://root:MTYwMTAteW9uYWx1@localhost:27017";

mongoose.connect(uri,{'dbName':'employeeDB'})
.then(()=>{
    console.log("Connected to MongoDB");
    return Employee.deleteOne({age: {$lt:30}, location: "New York"})
})
.then((deleteOneResult)=>{
    console.log("Deleted Doc for deleteone", deleteOneResult);

    return Employee.deleteMany({emp_name: {$regex: "R"}})
})
.then((deleteManyResults)=>{
    console.log("Deleted docs for deleteMany: ",deleteManyResults)
})
.catch((Err)=>{
    console.log("Error: ",Err);
})
.finally(()=>{
    mongoose.connection.close()
})