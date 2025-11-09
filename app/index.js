// import express from 'express';
const express = require('express');


const app= express();


app.get('/',(req,res)=>{
    res.send("anurag");
})

app.get('/:id', (rq, rs)=>{
    try{
      rs.send(`anurag ${rq.params.id}`)
    }catch(err){
        console.log('anurag error');
        
   rs.send(err);
    }

})

// if(require.main===module){

    app.listen(3000 , ()=> console.log(`server running on port ${3000}`));
// }


module.exports =app;