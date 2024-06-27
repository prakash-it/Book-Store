const router = require("express").Router();
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
// Sign-up
router.post("/sign-up", async (req, res) => {
    try {
        const { username, email, password, address } = req.body;

        // Check username length
        if (username.length < 4) {
            return res
            .status(400)
            .json({ message: "Username length should be greater than 4" });
        }

        // Check if username already exists
        const existingUsername = await User.findOne({ username: username });
        if (existingUsername) {
            return res
            .status(400)
            .json({ message: "Username already exists" });
        }

        //Password bcrypt 
        const hashPass = await bcrypt.hash(password, 10)

        // Check  email already exists
        const existingEmail = await User.findOne({ email: email });
        if (existingEmail) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Check password length
        if (password.length < 6) {
            return res.status(400).json({ message: "Password length should be greater than 6" });
        }

        // Create new user
        const newUser = new User({
            username: username,
            email: email,
            password: hashPass,
            address: address
        });

        await newUser.save();
        return res.status(200).json({ message: "Signup Successful" });
    } catch (error) {
        console.error("Error in sign-up:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

//sign-in
router.post("/sign-in", async(req,res)=>{
    try
    {
        const {username,password}= req.body
       const existingUsername = await User.findOne({username})
       if(!existingUsername)
        {
            res.status(400).json({message: "Invalid Credentials"})
        }

        await bcrypt.compare(password,existingUsername.password, (err,data)=>{
            if(data)
                {
                    const authClaims =[
                        {name:existingUsername.username},
                        {role: existingUsername.role}
                    ]
                
                    const token =jwt.sign({authClaims},"bookstore1516",{expiresIn:'30d',})
                    res.status(200).json({id:existingUsername._id , role:existingUsername.role, token:token})
                }
                else{
                    res.status(400).json({message: "Invalid Credentials"})
                }
        })
    }
    catch(error)
    {
        res.status(500).json({message: "Internal server error"})
    }
})
module.exports = router;
