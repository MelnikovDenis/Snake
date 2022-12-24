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
router.get('/', async (req, res)=>{
      try{
            var leaderboard = await snakeResult.find({}).sort({points: -1}).limit(20);      
            res.status(200).json(leaderboard);  
      }catch(e){
            res.status(500).json(e.message);
      }   
});
module.exports = router;
return router;