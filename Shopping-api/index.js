const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRouet = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
/* This is a middleware function that is used to handle database. */
mongoose
.connect(
    process.env.MONGO_URL
    )
.then(() => console.log("Database connected."))
.catch((err) => { console.log(err);
});
app.use(express.json());

/* This is a middleware function that is used to handle all the routes. */
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRouet);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

/* This is a callback function that is executed when the server is listening. */
app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running.")
});