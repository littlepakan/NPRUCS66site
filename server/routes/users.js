const express = require('express');
const router = express.Router();

const { 
  read, 
  list, 
  create, 
  update, 
  remove
  } = require('../controllers/users');

//// Path ต่อจาก Routing
//Read = get
// router.get('/user',(req, res) => {
//   res.send('Hello Get')
// });
router.get('/user/', list);
router.get('/user/:id', read);
//Create = post
router.post('/user', create);

//Update = put
router.put('/user/:id', update);

//Delete
router.delete('/user/:id', remove);

module.exports = router;