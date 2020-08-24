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
  console.log(coords.lng+"  "+coords.lat);

  // get temp with WeatherbitKey
  const currentDate = new Date();
  let start = new Date(travelInfo.departure);
  let end = new Date(travelInfo.return);
  let loop = new Date(start);
  let loopTime = start.getTime()-currentDate.getTime();
  let loopDay = loopTime / (1000 * 3600 * 24);
  loopDay = Math.floor(loopDay);
  const wKey ="332e3cf822c74e94b4af98176e2979dc"	;
  const wInitUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?lat=';
  const wUrl = wInitUrl+coords.lat+"&lon="+coords.lng+"&key="+wKey;
  const getTemps = await getApi(wUrl);
  while(loop<=end){
    // format Date
    let beautyDate = loop.getDate()+ "-" + (loop.getMonth() + 1) + "-" + loop.getFullYear();
    // create element with date and temp
    var addDate = document.createElement("div");
    addDate.classList.add("dateDay");
    addDate.innerText = beautyDate;
    document.getElementById("dateInfoBox").appendChild(addDate);
    var addTemp = document.createElement("div");
    addTemp.classList.add("dateTemp");
    addTemp.innerText = "Temp:"+getTemps.data[loopDay].temp;
    document.getElementById("dateInfoBox").appendChild(addTemp);
    // continue loop
    var newDate = loop.setDate(loop.getDate() + 1);
    loop = new Date(newDate);
     loopDay=loopDay+1;
  }
  // add PixaBay image
  const pInitUrl = 'https://pixabay.com/api/?key=';
  const pKey = "18027537-26bba2721a71594e77ca7f488";
  let pUrl = pInitUrl+pKey+"&q="+travelInfo.destination+"&city&image_type=photo";
  const imgApi = await getApi(pUrl);
  document.getElementById("destinationImg").style.backgroundImage = "url('"+imgApi.hits[0].previewURL+"')";

  // add Location to title
  document.getElementById("destinationTitle").textContent += travelInfo.destination;

  // show all changes
  document.getElementById("travelForm").classList.add("hidden");
  document.getElementById("travelInfoBox").classList.remove("hidden");
}

export{
  postData,
  getData,
  getApi,
  getAll
}
