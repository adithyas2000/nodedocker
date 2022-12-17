import express from 'express';
const app = express();
var result = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Providing config file. You can provide other arguments to the index.js file by changing them here
// const settings = Namespace ({config:'./config.js', compliance:undefined, plugin:undefined, govcloud:false, china:false, csv:undefined, json:'./result.json', junit:undefined, console:'table', collection:undefined, ignore_ok:false, exit_code:false, skip_paginate:true, suppress:undefined, remediate:undefined, cloud:'aws', run_asl:true })

app.get('/testEndpoint', (req, res, next) => { console.log("TestEndpoint"); res.status(200).send() });
// app.get('/runScan',(req,res,next)=>{Scan(settings)})
app.post('/endpoint2',(req,res,next)=>{
    console.log("Body:");
    console.log(req.body);
    res.status(200).send(req.body);
});
app.get('/',(req,res,next)=>{
    res.status(200).send('<h1><mark style="background-color:pink">🥺 <strong>I LOVE YOU SOOO MUCH😚</strong> 💕</mark></h1>');
})




const server = app.listen(3000, () => {
    let port = server.address().port;
    let address = server.address().address;

    console.log(`Running server at ${address} : ${port}`);
});

