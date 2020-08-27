var path = require('path')
const express = require('express')
const fetch = require('node-fetch')

const app = express()

// MeaningCloud credentials
const dotenv = require('dotenv')
dotenv.config();

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

// designates what port the app will listen to for incoming requests
app.listen(3030,startServer);
function startServer() {
    console.log("Server running on port 3030")
}

let info = {};

app.post('/addInfo',getDetails);
async function getDetails(req,res){
  //Save user travel data
  info = req.body;
  console.log("Your travel"+info.departure);
}


// API FUNCTION Weather API
async function getWeather(url=''){
  const response = await fetch(url);
  try{
    const data = await response.json();
    temp = data.main.temp;
    console.log(temp);
  }catch(error){
    console.log("error",error);
  }
}
