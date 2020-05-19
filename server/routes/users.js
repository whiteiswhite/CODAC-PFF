var express = require('express');
var router = express.Router();

const validateUserRegisterInput = require ('../validation/registerUser')

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

/* ------Route Utilisateurs---------*/
router.get('/check', function (req, res, next){

})

router.post('/register', function (req, res, next) {
  const {isValid, errors} = validateUserRegisterInput(req.body);

  if (!isValid) {
      return res.status(404).json(errors);
  }

  User.findOne({email: req.body.email})
      .then(user => {
          if (user){
              errors.email = 'Email already used';
              return res.status(404).json(errors);
          }


      })
})


module.exports = router;
