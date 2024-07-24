const express = require('express')
require('dotenv').config
const poemRoutes = require('./routes/poems')

//express app
const app = express()



// routes
app.use('/poetry', poemRoutes)

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`Server running on port ${PORT}`))






// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // const config = require('./config/config');

// // app.use(cors());
// // app.use(express.json());

// // mongoose.connect(config.db, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true
// // });

// // const db = mongoose.connection;
// // db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// // const homepage = require('./routes/homepage');
// // app.use('/api', homepage);


// app.get('/', (req,res) => {
//     res.send('home - lo haces increible!')
// })

// app.get('/about', (req,res) => {
//     res.send('about page')
// })

// // app.get('/poems/:forsale', (req,res) => {
// //     const { forsale } = req.params
// //     req.send( `${ forsale } poems`)
// // })


// app.get('/profile/:username', (req,res) => {
//     const { username } = req.params
//     req.send( `${ username }'s profile`)
// })

// app.get('/login', (req, res) => {
//     res.send('get login')
// })

// app.post('/login', (req, res) =>{
//     console.log(username, password)
//     res.send('post login')
// })

// module.exports = app;