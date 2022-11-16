const express = require('express');

const gymController = require('../controllers/gymController');

const router = express.Router();

router.post('/shoulders', 
  gymController.createShoulders,
  (req, res) => {
    return res.status(200).send('Sucessfully entered in databse.');
   }
);

router.post('/back', 
  gymController.createBack,
  (req, res) => {
    return res.status(200).send('Sucessfully entered in databse.');
  }
);

router.post('/chest', 
  gymController.createChest,
  (req, res) => {
    return res.status(200).send('Sucessfully entered in databse.');
  }
);

router.post('/arms', 
  gymController.createArms,
  (req, res) => {
    return res.status(200).send('Sucessfully entered in databse.');
  }
);

router.post('/legs', 
  gymController.createLegs,
  (req, res) => {
    return res.status(200).send('Sucessfully entered in databse.');
  }
);

router.get('/shoulders',
  gymController.getShoulders,
  (req, res) => {
    return res.status(200).json(res.locals.result);
  }
);

router.get('/back',
  gymController.getBack,
  (req, res) => {
    return res.status(200).json(res.locals.result);
  }
);

router.get('/chest',
  gymController.getChest,
  (req, res) => {
    return res.status(200).json(res.locals.result);
  }
);

router.get('/arms',
  gymController.getArms,
  (req, res) => {
    return res.status(200).json(res.locals.result);
  }
);

router.get('/legs',
  gymController.getLegs,
  (req, res) => {
    return res.status(200).json(res.locals.result);
  }
);

module.exports = router;

/* 
{
    "muscle": "shoulders",
    "workout": "Seated Dumbbell Press",
    "difficulty": "Beginner",
    "sets": "4",
    "reps": "8",
    "description": "This exercise is excellent at training the front and side deltoids, which are most responsible for the size and shape of your shoulders, and it’s also safe, easy to learn, and requires minimal equipment",
    "example": "https://www.youtube.com/watch?v=0JfYxMRsUCQ"
}
*/