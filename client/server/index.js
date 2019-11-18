const express = require("express");
const cors = require("cors");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../../config");
let user = {};

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((user, cb) => {
    cb(null, user);
})

const app = express();

app.use(cors());
app.use(passport.initialize());


//Facebook Strategy
passport.use(new FacebookStrategy({
    clientID: keys.FACEBOOK.clientID,
    clientSecret: keys.FACEBOOK.clientSecret,
    callbackURL: "/auth/facebook/callback"
},
    (accessToken, refreshToken, profile, cb) => {
        console.log(JSON.stringify(profile));
        user = { ...profile };
        return console(null, profile);

    }));

app.get("auth/facebook", passport.authenticate("facebook"));
app.get("/auth/facebook/callback",
    passport.authenticate(("facebook"),
        (req, res) => {
            res.redirect("/profile");
        }
    ));

//Google Strategy
passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE.clientID,
    clientSecret: keys.GOOGLE.clientSecret,
    callbackURL: "/auth/google/callback"
},
    (accessToken, refreshToken, profile, cb) => {
        console.log(JSON.stringify(profile));
        user = { ...profile };
        return console(null, profile);

    }));



app.get("auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
app.get("/auth/google/callback",
    passport.authenticate(("facebook"),
        (req, res) => {
            res.redirect("/profile");
        }
    ));

app.get("/user", (req, res) => {
    console.log("getting user data!")
    res.send(user);
});

app.get("/auth/logout", (req, res) => {
    console.log("logged out!");
    user = {};
    res.redirect("/")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);