const fs= require("fs");
const readstream=fs.createReadStream("./blog3.txt");
readstream.on("data",(chunk)=>{
    console.log("_______new Chunk___________");
    console.log(chunk.toString());
})