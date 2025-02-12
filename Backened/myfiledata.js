const fs = require('fs');

function mywritefile() {
    try {
        console.log("Before Writing");
        fs.writeFileSync('myfile.txt', "Namaste India");
        console.log("After Writing");
    } catch (err) {
        console.error("Error in writing the data: " + err);
    }
}

function myreadfile() {
    try {
        console.log("Before Reading");
        const data = fs.readFileSync("myfile.txt", 'utf8'); // Specify encoding
        console.log("Content: " + data);
        console.log("After Reading");
    } catch (err) {
        console.error("Error in reading the data: " + err);
    }
}

function myappendfile() {
    try {
        console.log("Before Appending");
        fs.appendFileSync('myfile.txt', " Jai Hind"); // Added a space for better formatting
        console.log("After Appending");
    } catch (err) {
        console.error("Error in appending the data: " + err);
    }
}

function mydeletefile() {
    try {
        console.log("Before Deleting");
        fs.unlinkSync('myfile.txt');
        console.log("After Deleting");
        console.log("Task Completed");
    } catch (err) {
        console.error("Error in deleting the file: " + err);
    }
}

module.exports = { mywritefile, myreadfile, myappendfile, mydeletefile };