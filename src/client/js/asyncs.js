// async post
async function postData(url='',data={}){
  const send = await fetch(url,{
    method:'POST',
    credentials:'same-origin',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(data),
  })
  try{
    const response = await send.json();
    return response;
    console.log(response);
  }catch(error){
    console.log("error",error);
  }
}

// async GET data from server
async function getData(url=''){
  const response = await fetch(url);
  try{
    const data = await response.json();
    console.log(data);
  }catch(error){
    console.log("error",error);
  }
}

// async GET temp from API OpenWeather
async function getLang(url=''){
  const response = await fetch(url);
  try{
    const data = await response.json();
    console.log(data);
  }catch(error){
    console.log("error",error);
  }
}

// async ask weather
async function askWeather(travelInfo){
  // 1. Get dates temperature, for it:
        // while loop to go through dates up to return date(included)
            // if statement to see if it is +7days after current date, to chose API
  let loop = new Date(info.departure);
  let end = new Date (info.return);
  const currentDate = new Date();
  let hours;
  let days;
  while(loop<=end){
    hours = loop.getTime()-currentDate.getTime();
    days = hours/(1000*3600*24);
    if(days<=5){
      // call weather API

      const weather = await getWeather(url);

    }else{
      // call Geo API
      // call Weather new API
    }
    loop.setDate(loop.getDate()+1);
  }
}

// async, get all Data and Display
async function getAll(travelInfo){
  // send Travel Info to server
  const sendInput = await Client.postData("/addInfo", travelInfo);
  // get temps from API
  const getWeatherInfo = await Client.askWeather(travelInfo);
}

export{
  postData,
  getData,
  getLang,
  getAll,
  askWeather
}
