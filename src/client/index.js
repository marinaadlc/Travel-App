alert("hello");

import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/styles.scss'

import {postData} from './js/asyncs'
import {getData} from './js/asyncs'
import {getLang} from './js/asyncs'
import {getAll} from './js/asyncs'
import {askWeather} from './js/asyncs'
import {storeInfo} from './js/textHandler'

// Openweather API credentials
let city='';
const units = 'imperial'
const initialUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const url = initialUrl + city  + "&units" + units + "&appid=" +process.env.OPENWEATHER_KEY;

// Weatherbit API credentials
const key = process.env.WEATHERBIT_KEY;


export{
  postData,
  getData,
  getLang,
  storeInfo,
  getAll,
  askWeather
}
