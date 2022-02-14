const mongoose =  require('mongoose');
const DB = 'mongodb+srv://dhiru:welcome2022@cluster0.fzfjw.mongodb.net/score_tracker?retryWrites=true&w=majority';

mongoose.connect(DB, {
    // useCreateIndex: true,
    // useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology: true

}).then(()=> console.log("Connection start")).catch((error)=> console.log(error.message));