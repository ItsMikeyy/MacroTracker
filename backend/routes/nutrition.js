const {Router} = require("express");
const mongoose = require("mongoose");
const ItemModel = require("../models/item");
const router = Router();
const passport = require("passport");
const { isUserAuthenticated } = require("../middlewares/auth");
mongoose.connect('mongodb://127.0.0.1:27017/nutrition');

router.get("/", isUserAuthenticated,  async (req, res) => {
        console.log("GET")
        try {
            const items = await ItemModel.find()
            res.json(items)
        }
        catch (err) {
            res.status(500).json({message: err.message})
        }  
});

router.post("/", (req, res) => {
    let formData = req.body;
    Object.keys(formData).forEach(k => {
        if (k == "name") {
            return
        }
        if (isNaN(formData[k])) {
            formData[k] = 0
        }
        else{
            formData[k] = Number(formData[k])
        }
    })
    console.log('form data', formData);
    const item = new ItemModel(formData)
    item.save()

    console.log('form data', item);
    res.sendStatus(200);
})

module.exports = router;