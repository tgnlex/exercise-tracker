const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
      .then(users => res,json(users))
      .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
  const username = rseq.body.username;
  const newUser = new Use({username});
  
  newUser.save()
    .then(() => res.json('User added;'))
    .catch(err => res.status(400).json('Error: '))
});

module.exports = router;