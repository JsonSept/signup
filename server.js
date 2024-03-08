// const express = require('express')
import express from 'express'
import {config} from 'dotenv'
import bcrypt from 'bcrypt'
import passport from 'passport'
const app = express()
config()

// const initializePassport = require('./passport-config')
// initializePassport(passport)

const users = []

app.set('view-engin', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => {
    res.render('index.ejs')
})

app.get('/login', (req,res) => {
    res.render('login.ejs')
})

app.post('/login', (req,res)=> {

})

app.get('/register', (req,res) => {
    res.render('register.ejs')
})

const PORT = process.env.PORT
// app.listen(3000)

app.post('/register', async (req, res)=>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        users.psuh({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
console.log(users)
})

app.listen(PORT, ()=>{
        console.log('http://localhost:'+ PORT);
    })


















// import express from 'express'
// import cors from 'cors'
// import {config} from 'dotenv'
// import bcrypt from 'bcrypt'
// import cookieParser from 'cookie-parser'
// import jwt from 'jsonwebtoken'
// import { Socket } from 'socket.io'
// import path from 'path'

// config();
// // const path = require('path')


// const PORT = process.env.PORT
// const app = express()


// app.use(cors())
// app.use(express.json())


// // app.use(express.static(path.join(__dirname, 'views')))
// app.get('/', (req,res) => {
//     res.json('signup');
   
// })
// app.get("/signup", (req, res)=>{
//     // res.json("signup");
//     // res.render('signup');
// })
// app.post("/signup", async (req,res) => {

//     const data = {
//         name: req.body.username,
//         password: req.body.password
//     }
//      //check if user already exists in the database
//      const existingUser = await collection.findOne({name: data.name})
//      if(existingUser) {
//          res.send("User already exists. Please choose a different username.")
//      }else {
//          // hash the password using bcrypt
//          const salRounds = 10; //Number of salt round for bcrypt
//          const hashedPassword = await bcrypt.hash(data.password, saltRounds);
 
//          data.password = hashedPassword;

//          const userdata = await collection.inserMany(data);
//          console.log(userdata);
//      }
 
//  })

//  //login user
// app.post("/login", async (req,res)=> {
//     try {
//         const check = await collection.findOne({name: req.body.username});
//         if(!check) {
//             res.send("user name cannot be found");
//         }

//         const isPasswordMatch = await bcrypt.compare(req.body.password,check.password);
//     if(isPasswordMatch) {
//         res.render("home");
//     }else {
//         req.send("wrong password");
//     }
// }catch{
//  res.send("Wrong Details")
// }
// })

// app.listen(PORT, ()=>{
//     console.log('http://localhost:'+ PORT);
// })