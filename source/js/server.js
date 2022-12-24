const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileRouter = require('./fileRouter.js');
const dbRouter = require('./dbRouter.js');

const PORT = 3000; //порт, который прослушивает сервер
const urlConnectDB = 'mongodb+srv://Sinen:MMelnikovB_1403@cluster0.5mbrsrv.mongodb.net/?retryWrites=true&w=majority';
const app = express();
app.use(express.json());
app.use(cors());
mongoose.set('strictQuery', false);
app.use('/', fileRouter);
app.use('/db', dbRouter);
startApp();


async function startApp(){
      try{
            await mongoose.connect(urlConnectDB, {useUnifiedTopology: true, useNewUrlParser: true}, () => console.log('Data base connection: successfull\n'));
            app.listen(PORT, () => console.log('Server running on port: ' + PORT));
      }
      catch(ex){
            console.log(ex);
      }
}