const http = require("http");
const fs= require("fs");

const _= require('lodash');

const server=http.createServer((req,res)=>{
   // console.log(req.url,req.method);

   // lodash
   const num=_.random(0.20);
   console.log(num);

   
    //response object
    res.setHeader("Content-Type","text/html");

    //res.write('<p>Hello this is Ab hishek</p>');
    //res.write("<h1>Hello this is Abhishek</h1>");
    //res.end();

    //fs.readFile('./html/index.html', (err, data) => {
      //     if (err) {
        //     console.log(err);
          //   res.end();
       //}
           //res.write(data);
       //    res.end(data);
        // });

    let path="./html/";
    switch(req.url)
    {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-blah':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
  
    }
    fs.readFile(path, (err, data) => {
        if (err) {
          console.log(err);
          res.end();
        }
        //res.write(data);
        res.end(data);
      });
    



});


server.listen(3000,"localhost",()=>{
    console.log("Listening for request");
})