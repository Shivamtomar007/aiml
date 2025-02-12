const fs = require('fs');
function datawritecb(){
fs.writeFile("data.pdf","hello writing pdf file data",(err)=>{
    if(err){
        console.log("Error while writing the file")
    }
    console.log("File written successfully");
});
}
function datareadcb(){
console.log("Task Successfully Completed");
fs.readFile("data.pdf","utf-8",(err,data)=>{
    if(err){
        console.log("Error while reading the file"+err);
    }
    console.log(data);
})
}
const obj = {datawritecb,datareadcb};
module.exports = obj;