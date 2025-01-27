const express = require('express');
//create a server
const server=express();
//creating a port
const port=5002;
const items=[
    {id:1,name:'jeans'},
    {id:2,name:'shorts'},
    {id:3,name:'kurti'}


];
server.use(express.json());
server.get('/',(req,res)=>{
    res.end("server is running");

}
);
server.get('/product',(req,res)=>{
    res.json(items)

}
);
server.post('/product',(req,res)=>{
      newitem={id:items.length+1,name:req.body.name};
      items.push(newitem);
      res.status(201).json(newitem);


})
server.put('/product/:id',(req,res)=>{
    const itemid=parseInt(req.params.id);
    const itemIndex=items.findIndex((item)=>item.id===itemid);
    if(itemIndex!== -1){
     items[itemIndex].name=req.body.name;
     res.json(items[itemIndex]);
    }
    else{
     res.status(404).send('Item is not found in a database');
    }
 
 })

server.delete('/product/:id',(req,res)=>{
   const itemid=parseInt(req.params.id);
   const itemIndex=items.findIndex((item)=>item.id===itemid);
   if(itemIndex!== -1){
    const deleteItem=items.splice(itemIndex,1);
    res.json(deleteItem);
   }
   else{
    res.status(404).send('Item is not found in a database');
   }

});



server.listen(port,()=>
    console.log('server is running on http://localhost:$(port)')
);
