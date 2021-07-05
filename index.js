const http = require('http');
const fs = require('fs');
const path = require('path');;
const express = require('express');
index = express();

const port = 3000;
const hostname = '127.0.0.1';

// console.log(path.join(__dirname, '/public'));
//inclue css and js (ie in public folder) with express module help
index.use(express.static(path.join(__dirname, '/public')));

const Home = fs.readFileSync('Home.html');
const Services = fs.readFileSync('Services.html');
const Explore = fs.readFileSync('Explore.html');
const Contact = fs.readFileSync('Contact.html');
const About = fs.readFileSync('About.html');



const server=http.createServer((req,res)=>{
    reghhfhfhfghfhfs.statusCode = 200;
    res.setHeader = ('Content-Type', 'text/html');
    url = req.url;
    console.log("url");
    if(url=='/'){
        res.end(Home);
    }
    else if(url=='/Services'){
   }
    else if(url=='/Explore'){
        res.end(Explore);
    }
    else if(url=='/Contact'){
        res.end(Contact);
    }
    else if(url=='/About'){
        res.end(About);
    }
    else{
        res.statusCode=404;
        res.end('error 404 not Found');
    }
})

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
