//ดึง Express.JS
const express = require('express');

//Morgan
const morgan = require('morgan');
//Cors
const cors = require('cors');
//Body
const bodyParse = require('body-parser');

//Connecting Database
const connectDB = require('./config/database');

//Route
const UserRouters = require('./routes/users');

//ใช้คำสั่ง app ของ express
const app = express();

connectDB();

//Using MiddleWare
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParse.json({limit:'10mb'}));

//Routing
app.use('/api', UserRouters);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server Started! | Server is running on port ${PORT}`));
// app.listen(4000, () => console.log(`server is running on port 4000`));