const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");
const User = require("../models/users");
const Account = require("../models/account");
var LocalStrategy = require('passport-local').Strategy;

// passport config for LocalStrategy
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user.id);
  });
});

passport.use(
  new GoogleStrategy(
    {
      // options for google strategy
      callbackURL: "/auth/google/redirect",
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
      //check if user already exist in our DB
      User.findOne({ googleId: profile.id }).then(currentUser => {
        if (currentUser) {
          //user exists
          console.log("user is:", currentUser);
          done(null, currentUser);
        } else {
          //if not create new user
          new User({
            username: profile.displayName,
            googleId: profile.id
          })
            .save()
            .then(newUser => {
              console.log("new user created:" + newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);