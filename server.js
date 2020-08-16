const exp=require('express');
let app=exp();//top-level function

app.get('/',(req,res)=>{
    res.send("hey arm, Server is created using nodejs framework that is expressjs");
})

let port=8888;
app.listen(port,(err)=>{
    if(err)throw err;
    console.log("server is running on port: "+port)
})
