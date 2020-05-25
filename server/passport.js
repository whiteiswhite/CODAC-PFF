const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const User = require('./models/User');

const cookieExtractor = req =>{
    let token = null;
    if(req && req.cookies){
        token = req.cookies["access_token"]
    }
    return token;
};

// Middleware d'authorisation pour accès aux pages
passport.use(new JWTStrategy({
    jwtFromRequest : cookieExtractor,
    secretOrKey : "Dealz"
},(payload, done)=>{
    User.findById({_id : payload.sub}, (err, user)=>{
        if(err)
            return done(err, false);
        if(user)
            return done(null, user);
        else
            return done(null, false);
    })
}));

// Middleware d'authentification local strategy qui utilise l'username et le password
passport.use(new LocalStrategy((username, password, done)=>{
    User.findOne({username}, (err, user) =>{
        // Si quelque chose ne va pas avec la db
        if(err)
            return done(err);
        // Si pas d'user dans la db
        if(!user)
            return done(null, false);
        // Check si le mdp est correct
        user.comparePassword(password, done);
    })
}));
