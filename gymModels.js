const mongoose = require("mongoose");

const MONGO_URI = 'mongodb+srv://timmylem01:Tl258110!@soloproj1.34uwnwg.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
  dbName: 'GymDB'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  muscle: {type: String, required: true},
  workout: String,
  difficulty: String,
  sets: Number,
  reps: Number,
  description: String,
  example: String,
});

const Shoulder = mongoose.model('shoulders', workoutSchema);

const Back = mongoose.model('back', workoutSchema);

const Chest = mongoose.model('chest', workoutSchema);

const Arm = mongoose.model('arms', workoutSchema);

const Leg = mongoose.model('legs', workoutSchema);

module.exports = {
  Shoulder,
  Back,
  Chest,
  Arm,
  Leg
};