// import express from 'express';
const express = require('express');


const app= express();
const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send("anurag");
})


app.get('/sir',(req,res)=>{
    res.send("anurag mishra ji");
})

app.get('/:id', (rq, rs)=>{
    try{
      rs.send(`anurag ${rq.params.id}`)
    }catch(err){
        console.log('anurag error');
        
   rs.send(err);
    }

})

if(require.main===module){

    app.listen(3000 , ()=> console.log(`server running on port ${port}`));
}



module.exports =app;



