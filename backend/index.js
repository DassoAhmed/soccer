import express from 'express'

const app = express();
const PORT = 4000;


app.get('/',(req, res) =>
    res.send(`Our Application Is Running ${PORT}` )
)

app.listen(PORT,() =>
    console.log(`Your Soccer Server is Running on Port ${PORT}`)
)