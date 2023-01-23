const express = require('express')
const Joi = require('joi');
const mongoose = require("mongoose");
const app = express()
const PORT = 8080


const UserSchema = new mongoose.Schema({
    name: String,
    description: String,
    title: String,
  });

const UserModel = mongoose.model("User", UserSchema);

mongoose.set("strictQuery", false);
mongoose
  .connect(`mongodb+srv://Fatya:jNGpl26u4fP2KLwH@cluster0.0at3gep.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error(err));



const USERSchema = Joi.object({
name: Joi.string().required(),
description: Joi.string().required(),
title: Joi.string().required(),
})

app.post('/api/example',  (req, res, next) => {
    let { error } = USERSchema.validate(req.body);
    if (!error) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");
      res.status(422).json({ error: message });
    }
  },
  async (res,req) => {
const newUser = new UserModel({...req.body})
await newUser.save()
res.status(201).send({message: "User saved successfully", users: newUser});
})

app.get('/api/example', (req, res) => {
    UserModel.find(null,(error,users)=>{
        if(error) return res.status(500).send({error});
        res.send(users)
    })
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

//jNGpl26u4fP2KLwH




//bAKHE5IN2imOEtCA kohne proyekt