const fs = require('fs');
const express = require('express');
const app = express();
const port = 8000;
const hostname = '127.0.0.1';
const path = require('path');

//set the template engine  as pug
app.set('view engine', 'pug');

//set the view directory
app.set('views', path.join(__dirname, 'views'));

//our pug endpoint

// const Home = fs.readFileSync('Home.html');
// const Services = fs.readFileSync('Services.html');
// const Explore = fs.readFileSync('Explore.html');
// const Contact = fs.readFileSync('Contact.html');
// const About = fs.readFileSync('About.html');

app.use('/public', express.static(path.join(__dirname, '/public')));
// app.use('/public',express.static('public'));

app.get("/", (req, res)=>{
    // res.sendfile(__dirname + '/Home.html');
    res.render('Home.pug');
});
app.get("/About", (req, res)=>{
    res.render('About.pug');
});
app.get("/Services", (req, res)=>{
    res.render('Services.pug');
});
app.get("/Contact", (req, res)=>{
    res.render('Contact.pug');
});
app.get("/Explore", (req, res)=>{
    res.render('Explore.pug');
});
app.listen(port,hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
