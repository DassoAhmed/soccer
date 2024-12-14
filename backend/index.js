import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/soccerRoutes';

const app = express();
const PORT = 4000;

// mongo connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/soccerDB')

// bodyparser
app.use(bodyparser.urlencoded({ extended: true}))
app.use(bodyparser.json())

//Cors
app.use(cors())

routes(app)

app.get('/',(req, res) =>
    res.send(`Our Application Is Running ${PORT}` )
)

app.listen(PORT,() =>
    console.log(`Your Soccer Server is Running on Port ${PORT}`)
)