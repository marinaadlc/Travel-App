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
async function getApi(url=''){
  const response = await fetch(url);
  try{
    const data = await response.json();
    console.log(data);
    return data;
  }catch(error){
    console.log("error",error);
  }
}


// async, get all Data and Display
async function getAll(travelInfo){
  console.log("start");
  // send Travel Info to server
  Client.postData("/addInfo", travelInfo);

  // Geonames API credentials
  let coords={};
  const gUser = "marsuprstar";
  const gInitUrl = 'http://api.geonames.org/searchJSON?q=';
  const gUrl = gInitUrl + travelInfo.destination + '&maxRows=10&username=' + gUser;
  // get coordinates with Geonames
  const getCoords = await getApi(gUrl);
  console.log(getCoords);
  coords["lng"]=getCoords.geonames[0].lng;
  coords["lat"]=getCoords.geonames[0].lat;
  console.log(coords.lng+coords.lat);

  // get temp with WeatherbitKey

}

export{
  postData,
  getData,
  getApi,
  getAll
}
