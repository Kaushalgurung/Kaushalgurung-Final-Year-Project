const req = require("express/lib/request");
const User = require("../models/User");
const router = require("express").Router();
const Cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken");

//register

router.post("/register", async (req,res )=> {
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
router.post("/login", async (req,res)=>{
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("No user name! or Incorrect Username!");

        const hashedPassword = Cryptojs.AES.decrypt(
            user.password, 
            process.env.PASS_SEC);

        const Orginalpassword = hashedPassword.toString(Cryptojs.enc.Utf8);
        Orginalpassword !==req.body.password && res.status(401).json("Incorrect Password!");

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
                {expiresIn:"7d"}
            );
        
        const { password, ...others } = user._doc;

        res.status(200).json({...others, accessToken});
    }catch(err){
        res.status(500).json(err);   
    }
});
module.exports = router;