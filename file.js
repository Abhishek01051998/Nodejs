const { Console } = require("console");
const fs= require("fs");

fs.readFile("./blog1.txt",(err,data)=>{
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});


fs.writeFile("./blog2.txt","/n Some new letters",()=>{
    console.log("Writing done");

});