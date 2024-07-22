


app.get('/poems/:forsale', (req,res) => {
    const { forsale } = req.params
    req.send( `${ forsale } poems`)
})