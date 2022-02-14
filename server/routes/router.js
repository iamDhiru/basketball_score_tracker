const express = require('express');
const router = express.Router();
const matches = require("../models/matchSchema");

router.get("/",(req, res)=>{
    console.log("connect");
})

router.post("/api/match", async (req, res)=>{
    
    const {team1Name, team2Name, team1Score, team2Score, winner} = req.body;
    console.log("body",req.body)
    if(team1Name && team2Name && winner){
        try {
            const addMatch = new matches({team1Name, team2Name, team1Score, team2Score, winner});
            await addMatch.save();
            res.status(201).json(addMatch)
            console.log(addMatch)
    
        } catch (error) {
            res.status(404).json(error)
        }
        
    }else{
        res.status(404).send("Please give all data");
    }
    
})

router.get("/api/matches", async (req, res)=>{
    try{
        const matchData = await matches.find();
        res.status(201).json(matchData)
        console.log(matchData);
    }catch(error){
        res.status(404).json(error)
    }
})

module.exports = router;