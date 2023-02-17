const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileRouter = require('./fileRouter.js');
const dbRouter = require('./dbRouter.js');

const PORT = 3000; //порт, который прослушивает сервер
const urlConnectDB = 'Заглушка, потому что я светил тут данными для авторизации в бд';
const app = express();
app.use(express.json());
app.use(cors());
mongoose.set('strictQuery', false);
app.use('/', fileRouter); //использования роутера, который обрабатывает запросы файлов
app.use('/db', dbRouter); //использование роутера, который обрабатывает запросы к бд
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
