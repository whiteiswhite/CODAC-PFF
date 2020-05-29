const express = require('express');
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
const User = require('../models/User');

const userRouter = express.Router();

const signToken = userID => {
    return JWT.sign({
        iss : "Dealz",
        sub : userID
        // la signature doit matcher avec le SecretOrKey de passport
    }, "Dealz", {expiresIn : "1h"})
};

userRouter.post('/register',(req, res)=>{
    const { username, email, password, status } = req.body;
    User.findOne({username}, (err, user)=>{
        if(err)
            res.status(500).json({message : {msgBody : "Erreur random 1", msgError: true}});
        if(user)
            res.status(400).json({message : {msgBody : "Le nom d'utilisateur est déjà utilisé", msgError: true}});
        else{
            User.findOne({email}, (err, user)=> {
                if (err)
                    res.status(500).json({message: {msgBody: "Erreur random 2", msgError: true}});
                if (user)
                    res.status(400).json({message: {msgBody: "L'email est déjà utilisé", msgError: true}});
                else {
                    const newUser = new User({username, email, password, status});
                    newUser.save(err => {
                            if (err)
                                res.status(500).json({
                                    message: {
                                        msgBody: "Erreur lors de la création du compte",
                                        msgError: true
                                    }
                                });
                            else
                                res.status(201).json({
                                    message: {
                                        msgBody: "Votre compte a bien été crée !",
                                        msgError: false
                                    }
                                });
                        }
                    )
                }
            })
        }
    })
});

userRouter.post('/login',passport.authenticate('local',{session: false}),(req, res)=> {
    if(req.isAuthenticated()){
        const {_id, username } = req.user;
        const token = signToken(_id);
        res.cookie('access_token', token, {httpOnly: true, sameSite: true});
        res.status(200).json({isAuthenticated : true, user: {username}})
    } else {
        res.status(500).json({
            message: {
                msgBody: "bite",
                msgError: true
            }
        })
    }
});

userRouter.get('/logout',passport.authenticate('jwt',{session: false}),(req, res)=> {
    res.clearCookie('access_token');
    res.json({user: {username : ""}, success : true})
});

userRouter.get('/authenticated',passport.authenticate('jwt',{session : false}),(req,res)=>{
    const {username} = req.user;
    res.status(200).json({isAuthenticated : true, user : {username}});
});

module.exports = userRouter;
