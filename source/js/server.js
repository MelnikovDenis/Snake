//import express from 'express';
const express = require('express');
const PORT = 3000; //порт, который прослушивает сервер
const app = express();
startApp();


async function startApp(){
      try{
            app.listen(PORT, () => console.log('server running on port: ' + PORT));
      }
      catch(ex){
            console.log(ex);
      }
}