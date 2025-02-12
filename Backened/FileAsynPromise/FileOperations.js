const fs = require('fs').promises;
const promise = fs.writeFile("data.txt","Hello Writing PDF file by promises");
//console.log(promise); // Promise { <pending> }
promise.then(()=>{
    console.log("Data Written Successfully");
}).catch((err)=>{
    console.log("Error while writing the file");

}).finally(()=>{
    console.log("Finally Done");
})
const promise1 = fs.readFile("data.txt","utf-8");
promise1.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("Error While Reading the file");
})
console.log("Reading Successfully");