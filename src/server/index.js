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
app.listen(3030, function () {
    console.log("Server running on port 3030")
})

let info = {};
let dates ={};

app.post('/addDates',addDates);
function addDates(req,res){
  dates=req.body;
}

app.post('/addInfo',getDetails);
async function getDetails(req,res){
  // 1. Save user travel data
  info = req.body;
  console.log(info);
  // 2. Get dates temperature, for it:
        // while loop to go through dates up to return date(included)
            // if statement to see if it is +7days after current date, to chose API
  for(i)

}






textInput = {};
let urlOk= '';

async function addText(req,res){
  const text = req.body;
  textInput["text"]=text.formText;
  console.log(textInput.text);
  urlOk = initUrl+'&txt="'+textInput.text+'"';
  console.log(urlOk);
}
//API credentials
const initUrl = 'https://api.meaningcloud.com/lang-2.0?key='+process.env.API_key;

// API FUNCTION
async function getLang(url=''){
  const response = await fetch(url);
  try{
    const data = await response.json();
    console.log(data);
    textInput["lang"]=data.language_list[0].language;
    console.log(textInput.lang)
  }catch(error){
    console.log("error",error);
  }
}
