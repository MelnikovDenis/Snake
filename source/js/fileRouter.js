const express = require('express');
const router = new express.Router();

router.get('/', async(req, res)=>{
      res.status(200).sendfile('index.html');           
});
router.get('/source/js/indexScripts.js', async(req, res)=>{
      res.status(200).sendfile('./source/js/indexScripts.js');           
});
router.get('/source/js/snake.js', async(req, res)=>{
      res.status(200).sendfile('./source/js/snake.js');           
});
router.get('/source/css/popUpStyles.css', async(req, res)=>{
      res.status(200).sendfile('./source/css/popUpStyles.css');           
});
router.get('/source/css/indexStyle.css', async(req, res)=>{
      res.status(200).sendfile('./source/css/indexStyle.css');           
});
router.get('/source/images/favicon.png', async(req, res)=>{
      res.status(200).sendfile('./source/images/favicon.png');           
});
router.get('/source/fonts/Sonic1TitleScreenFilled.ttf', async(req, res)=>{
      res.status(200).sendfile('./source/fonts/Sonic1TitleScreenFilled.ttf');           
});
module.exports = router;
return router;