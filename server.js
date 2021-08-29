const http=require('http');
const fs=require('fs');

var requests=require('requests');
const hostname='127.0.0.1';
const port=80;
const homeFile=fs.readFileSync('index.html',"utf-8");
 const replaceVal=(tempVal,orgVal)=>{
     let temperature=tempVal.replace("{%tempval%}",orgVal.main.temp);
     temperature=temperature.replace("{%tempmin%}",orgVal.main.temp_min);
     temperature=temperature.replace("{%tempmax%}",orgVal.main.temp_max);
     temperature=temperature.replace("{%location%}",orgVal.name);
     return temperature;
 };
const server=http.createServer((req,res)=>{
 if(req.url=="/"){
     requests("http://api.openweathermap.org/data/2.5/weather?q=farrukhabad&units=metric&appid=16c92908542ac811ad7e4f126b29f730")
 .on("data",(chunk)=>{
    const objData= JSON.parse(chunk);   
    const arr=[objData];
    const realData=arr.map((val)=> replaceVal(homeFile,val)).join(""); 
    res.write(realData);
    console.log(realData);
})
 .on("end",(err)=>{
     if(err) return console.log("connection closed due to erros",err);
     console.log("end");

 });
}
});


server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}/`);
  });