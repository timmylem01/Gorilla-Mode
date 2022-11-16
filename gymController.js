const { stringify } = require('querystring');
const models = require('./gymModels');

const gymController = {};

gymController.createShoulders = (req, res, next) => {
  const {
    muscle,
    workout,
    difficulty,
    sets,
    reps,
    description,
    example
  } = req.body;
  const result = models.Shoulder.create({ muscle: muscle, workout: workout, difficulty: difficulty, sets: sets, reps: reps, description: description, example: example }, (err, res) => {
    if (err) {
      return next({
        log: 'Express error handler caught in gymController.createShoulders Middleware.',
        status: 400,
        message: { err: 'An error occurred in gymController.createShoulders.' },
      })
    }
    res.locals.result = result;
    return next();
  });
};

gymController.createBack = (req, res, next) => {
  const {
    muscle,
    workout,
    difficulty,
    sets,
    reps,
    description,
    example
  } = req.body;
  const result = models.Back.create({ muscle: muscle, workout: workout, difficulty: difficulty, sets: sets, reps: reps, description: description, example: example }, (err, res) => {
    if (err) {
      return next({
        log: 'Express error handler caught in gymController.createBack Middleware.',
        status: 400,
        message: { err: 'An error occurred in gymController.createBack.' },
      })
    }
    res.locals.result = result;
    return next();
  });
};

gymController.createChest = (req, res, next) => {
  const {
    muscle,
    workout,
    difficulty,
    sets,
    reps,
    description,
    example
  } = req.body;
  const result = models.Chest.create({ muscle: muscle, workout: workout, difficulty: difficulty, sets: sets, reps: reps, description: description, example: example }, (err, res) => {
    if (err) {
      return next({
        log: 'Express error handler caught in gymController.createChest Middleware.',
        status: 400,
        message: { err: 'An error occurred in gymController.createChest.' },
      })
    }
    res.locals.result = result;
    return next();
  });
};

gymController.createArms = (req, res, next) => {
  const {
    muscle,
    workout,
    difficulty,
    sets,
    reps,
    description,
    example
  } = req.body;
  const result = models.Arm.create({ muscle: muscle, workout: workout, difficulty: difficulty, sets: sets, reps: reps, description: description, example: example }, (err, res) => {
    if (err) {
      return next({
        log: 'Express error handler caught in gymController.createArms Middleware.',
        status: 400,
        message: { err: 'An error occurred in gymController.createArms.' },
      })
    }
    res.locals.result = result;
    return next();
  });
};

gymController.createLegs = (req, res, next) => {
  const {
    muscle,
    workout,
    difficulty,
    sets,
    reps,
    description,
    example
  } = req.body;
  const result = models.Leg.create({ muscle: muscle, workout: workout, difficulty: difficulty, sets: sets, reps: reps, description: description, example: example }, (err, res) => {
    if (err) {
      return next({
        log: 'Express error handler caught in gymController.createLegs Middleware.',
        status: 400,
        message: { err: 'An error occurred in gymController.createLegs.' },
      })
    }
    res.locals.result = result;
    return next();
  });
};

gymController.getShoulders = (req, res, next) => {
  const {
    muscle
  } = req.body;
  const result = models.Shoulder.find( {muscle: muscle}, (err, docs) => {
    if(err) {
      return next({
        log: 'Express error handler caught in gymController.getShoulders Middleware.',
        status: 400,
        message: { err: 'An error occurred in gymController.getShoulders.' },
      });
    } else if (docs.length === 1) {
      res.locals.result = result;
      return next();
    }
  })
};

gymController.getBack = (req, res, next) => {
  const {
    muscle
  } = req.body;
  const result = models.Back.find( {muscle: muscle}, (err, docs) => {
    if(err) {
      return next({
        log: 'Express error handler caught in gymController.getBack Middleware.',
        status: 400,
        message: { err: 'An error occurred in gymController.getBack.' },
      });
    } else if (docs.length === 1) {
      res.locals.result = result;
      return next();
    }
  })
};

gymController.getChest = (req, res, next) => {
  const {
    muscle
  } = req.body;
  const result = models.Chest.find( {muscle: muscle}, (err, docs) => {
    if(err) {
      return next({
        log: 'Express error handler caught in gymController.getChest Middleware.',
        status: 400,
        message: { err: 'An error occurred in gymController.getChest.' },
      });
    } else if (docs.length === 1) {
      res.locals.result = result;
      return next();
    }
  })
};

gymController.getArms = (req, res, next) => {
  const {
    muscle
  } = req.body;
  const result = models.Arm.find( {muscle: muscle}, (err, docs) => {
    if(err) {
      return next({
        log: 'Express error handler caught in gymController.getArms Middleware.',
        status: 400,
        message: { err: 'An error occurred in gymController.getArms.' },
      });
    } else if (docs.length === 1) {
      res.locals.result = result;
      return next();
    }
  })
};

gymController.getLegs = (req, res, next) => {
  const {
    muscle
  } = req.body;
  const result = models.Leg.find( {muscle: muscle}, (err, docs) => {
    if(err) {
      return next({
        log: 'Express error handler caught in gymController.getLegs Middleware.',
        status: 400,
        message: { err: 'An error occurred in gymController.getLegs.' },
      });
    } else if (docs.length === 1) {
      res.locals.result = result;
      return next();
    }
  })
};

module.exports = gymController;