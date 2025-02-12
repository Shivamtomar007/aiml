// const{sum,multiplication} = require('./myfile');
// const{average,sqrt} = require('./utility');
// console.log("Sum:"+sum(2,3));
// console.log("Multiplication:"+multiplication(2,3));
// const a =average(3,3);
// console.log("Square root:"+sqrt(a));

const { mywritefile, myreadfile, myappendfile, mydeletefile } = require('./myfiledata.js');

mywritefile();
myreadfile();  
myappendfile(); 
myreadfile();  
mydeletefile(); 

