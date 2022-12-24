const express = require('express');
const snakeResult = require('./snakeResult.js');
const router = new express.Router();
router.post('/', async (req, res)=>{
      try{
            const {nick, points} = req.body;
            const post = await snakeResult.create({nick, points});
            res.status(200).end();
      }catch(e){
            res.status(500).end(e.message);
      }     
});
module.exports = router;
return router;