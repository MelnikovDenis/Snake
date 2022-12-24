const express = require('express');
const fileRouter = require('./fileRouter.js');

const PORT = 3000; //порт, который прослушивает сервер
const app = express();
app.use('/', fileRouter);
startApp();


async function startApp(){
      try{
            app.listen(PORT, () => console.log('server running on port: ' + PORT));
      }
      catch(ex){
            console.log(ex);
      }
}