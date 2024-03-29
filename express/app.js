require('dotenv').config()
// require('./config/mysql')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const nodemailer = require('nodemailer')
const session = require('express-session')
const files = require('express-fileupload')
// const mongoose = require('mongoose')
// const mysql = require('mysql')
// const MongoStore = require('connect-mongo')(session)
const cors = require('cors')
const auth = require('./auth/auth')
const morgan = require('morgan')
const app = express()

app.set('view engine', 'jade');

// POST SETUP
app.use(express.json())

// CORS SETUP
app.use(cors())

app.use(bodyParser.urlencoded({extended: true})); // allow parsing nested objects in query
app.use(bodyParser.json());


// API CALL LOGGIN
app.use(morgan('dev'))


// SESSION SETUP
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     cookie: { maxAge: 60000 }, // in millisec
//     store: new MongoStore({
//       mongooseConnection: mongoose.connection,
//       ttl: 24 * 60 * 60 // 1 day    
//     }),
//     saveUninitialized: true,
//     resave: true
//   })
// )
app.use(require('./routes/auth'))
app.get('/', (req, res) => res.send('hello :) my api is working'))
app.use('/photos', require('./routes/photos'))
app.use('/users', require('./routes/users'))
// app.use('/categories', require('./routes/category'))
// app.use('/galeries', require('./routes/galeries'))
app.use('/contact', require('./routes/mail'))
// app.use('/packs', require('./routes/packs'))
// app.use('/orders', require('./routes/orders'))

// app.use('/contact', require('./routes/sendmail'))

app.listen(process.env.PORT, () => {
console.log("BACKEND server listening on port", process.env.PORT)});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false })); // allow parsing nested objects in query
// app.use(cors());

// 404


module.exports = app
