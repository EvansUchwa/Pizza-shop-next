import mongoose from "mongoose";



const mongo_url = "mongodb+srv://Evans:Mongodb6@cluster0.ltwol.mongodb.net/Pizza-shop?retryWrites=true&w=majority"
mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true });
function DB_CONNEXION() {
    mongoose.connection;
}


//Bind connection to error event (to get notification of connection errors)
// db.once('open', () => console.log('Connecté à MongoLab'))
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));


export default DB_CONNEXION;