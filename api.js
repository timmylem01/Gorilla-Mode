const express = require('express');

const gymController = require('./gymController');

const router = express.Router();

router.post('/shoulders', 
  gymController.createShoulders,
  (req, res) => {
    return res.status(200).json(res.locals.result)
   }
);

router.post('/back', 
  gymController.createBack,
  (req, res) => {
    return res.status(200).json(res.locals.result)
  }
);

router.post('/chest', 
  gymController.createChest,
  (req, res) => {
    return res.status(200).json(res.locals.result)
  }
);

router.post('/arms', 
  gymController.createArms,
  (req, res) => {
    return res.status(200).json(res.locals.result)
  }
);

router.post('/legs', 
  gymController.createLegs,
  (req, res) => {
    return res.status(200).json(res.locals.result)
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