const mongoose =  require('mongoose');

const matchSchema = new mongoose.Schema({
    team1Name:{
        type: String,
        required: true
    },
    team2Name:{
        type: String,
        required: true
    },
    team1Score:{
        type: Number,
        // required: true
    },
    team2Score:{
        type: Number,
        // required: true
    },
    winner:{
        type: String,
        required: true
    },
})

const matches = new mongoose.model('matches', matchSchema);

module.exports = matches;