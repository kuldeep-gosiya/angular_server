const express=require ('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var cors=require('cors');
var path=require('path');
const { Console } = require('console');
const route=require('./routes/route');
const { request } = require('http');

var app=express();

const port=3000;

//connect to mongo db
mongoose.connect('mongodb://0.0.0.0:27017/TaskManager');

//when connected
mongoose.connection.on('connected',()=>{
    console.log('connected to database');
})

//if error when connecting to database
mongoose.connection.on('error',(err)=>{
    console.log('error connecting to database: '+err);
})

//adding middleware=cors
app.use(cors());

//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));


//routes
app.use('/api',route);
//testing server
app.get('/',(req,res)=>{
    res.send('Hello');
});

app.listen(port,()=>{
    console.log('Server is running at port: '+port);
});

var https = require('https');
var fs = require('fs');
var https_options = {
    //key: fs.readFileSync("/etc/nginx/sites-avalable/"),
    Cert: fs.readFileSync("/etc/nginx/sites-avalable/test-ng.raoinfo.tech"),
    ca: [
    //fs.readFileSync('/etc/nginx/sites-avalable'),
    //fs.readFileSync('/etc/nginx/sites-avalable/test-ng.raoinfo.tech')
    ]
};
https.createServer(options, function (req, res){
    res.writeHead(3000);
    res.end("welcome to nodejs https server");
}).listen(4200)