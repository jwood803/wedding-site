const express = require('express');
const router = express.Router();
const firebase = require('firebase');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/rsvp', (request, response) => {

});

module.exports = router;