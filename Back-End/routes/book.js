const router = require("express").Router();
const User = require('../models/users');
const Book = require('../models/book')
const jwt = require('jsonwebtoken');
const {authenticateToken } = require('./userAuth');

//add books --admin
router.post("/add-book", authenticateToken, async (req,res)=>{
        try{
            const { id } = req.headers;
            const user = await User.findById(id);
            if(user.role !== "admin")
                {
                    return res.status(400).json({message: "You are not have a access "})
                }
            const book =  new Book({
                url: req.body.url,
                title: req.body.title,
                author: req.body.author,
                price: req.body.price,
                language: req.body.language
            })
            await book.save()

            res.status(200).json({message: "Book addes successfully"})
        }
        catch(error){
            return res.status(500).json({ message: "Internal Server Error" })
        }
})

module.exports = router