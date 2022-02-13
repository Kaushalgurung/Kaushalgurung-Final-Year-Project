const req = require("express/lib/request");
const User = require("../models/User");
const router = require("express").Router();
const Cryptojs = require("crypto-js");

//register

router.post("/register", async(req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password:Cryptojs.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });

    try{const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    console.log(savedUser);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//login

router.post("/login", async(req,res)=>{
    try{
        const user = await User.findOne ({username: req.body.username});
        !user && res.status(401).json("no user found");

        const hashedPassword = Cryptojs.AES.decrypt(user.password, process.env.PASS_SEC);
        const password = hashedPassword.toString(Cryptojs.enc.Utf8);

        password !==req.body.password && res.status(401).json("incorrect password");

        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;
