const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('home - lo haces increible!')
})

app.get('/about', (req,res) => {
    res.send('about page')
})

// app.get('/poems/:forsale', (req,res) => {
//     const { forsale } = req.params
//     req.send( `${ forsale } poems`)
// })


app.get('/profile/:username', (req,res) => {
    const { username } = req.params
    req.send( `${ username }'s profile`)
})

app.get('/login', (req, res) => {
    res.send('get login')
})

app.post('/login', (req, res) =>{
    console.log(username, password)
    res.send('post login')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on port ${PORT}`))