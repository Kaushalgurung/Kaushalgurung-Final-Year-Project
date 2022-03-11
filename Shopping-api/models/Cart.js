const mongoose = require("mongoose")

/* This is creating a new schema for the Cart model. */
const CartSchema = new mongoose.Schema({
        userID: {type: String, required:true},
        products:[
            {
                productId:{type:String,},
                quantity:{type:Number, default: 1,},
            },
        ],
    },
        {timestamps: true}
);

module.exports = mongoose.model("Cart", CartSchema);