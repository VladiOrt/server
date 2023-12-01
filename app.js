const express     = require('express');
const cors        = require('cors');
const bodyParser  = require('body-parser');
const dotenv      = require('dotenv');
const Routes = require('./routes/');
const { PORT }    = (dotenv.config({ path: './.env' })).parsed;
const { dbConnection }  = require('./');

dbConnection();

const app = express();
const router = express.Router();

app.use(cors())
app.use(bodyParser.json());
app.use(router)
app.use('/v1', Routes);

app.listen(PORT, function () {
    console.log("Listening at the port " + PORT)
});

module.exports = app;