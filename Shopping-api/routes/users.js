const router = require("express").Router();

router.get("/usretest", (req,res)=>{
    res.send("user test is sucessful");
});
module.exports = router