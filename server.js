/* var http = require('http');
var fs = require('fs')
http.createServer((req,res)=>{
  /*   res.write('hello world');/*res.write(req.url)
    res.end(); */

    /* fs.readFile('text.txt',(err,data)=>{ /*writeFile, appendFile 
        res.write(data);
        res.end(); 

        fs.unlink('test.txt',(err)=>{
if (err)throw err;
console.log('file deleted')
        })
    
console.log("server is running....")
}).listen(4003) */

/* var url= require('url');
var adrs ='http://localhost:4003/home.html?year=2018&month=feb'
var q = url.parse(adrs,true);
console.log(q.search);/*q.hostname,pathname */ 


/* var http = require('http');
var uc = require('upper-case');
http.createServer((req,res)=>{
    res.write(uc.upperCase('hello world'));
    res.end();
}).listen(4003) */

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
   service : 'gmail',
    auth:{
        user:'domain.getinfo@gmail.com',
        pass:'Mahesh@0432'
    }
})

var options ={
    from:'domain.getinfo@gmail.com',
    to : 'radhamahendra0432@gmail.com',
    subject:'Testing Mail',
    text:'regards mahendra'
}
transporter.sendMail(options,(err,info)=>{
    if(err){
        console.log(err);
    }
    else{
     console.log('email sent'+info.response)   
    }
})

