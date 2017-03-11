const db = require('../lib/db');
const bcrypt = require('bcrypt');
const capitalName = require('../lib/helpers/capitalName');


//Checks Database for user and sets session to user object
const authenticate = (req, res, next) => {

  const data = req.body;

  db.one("(SELECT * FROM users where email = $1)", [data.email])
    .then((user) => {

      bcrypt.compare(data.password, user.password, (err, cmp) => {
        if (cmp) {
          req.session.user = user;
          delete req.session.user.password;
          next();
        } else {
          res.send('Email/Password not found.');
        }
      });
    })
    .catch(() => {
      res.send('Email/Password not found.');
    })
};

//Sends User Data into the Database
const register = (req, res, next) => {

  const data = req.body;
  const fname = capitalName(data.first_name);
  const lname = capitalName(data.last_name);

    bcrypt.hash(data.password, 10, (err, hash) => {
      db.none("INSERT INTO users (First_Name,Last_Name,email,password) VAlUES ($1,$2,$3,$4)", [fname, lname, data.email, hash])
      .then((data) => {
        console.log(data);
        next();
      })
      .catch((err) => {
        res.send('Something went wrong!')
        console.log(err);
      })
  });
}

module.exports = {
  authenticate,
  register
};
