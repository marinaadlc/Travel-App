// things to check: departure before return, destination is all text+not empty

async function storeInfo(event){
  event.preventDefault();
  const travelInfo = {};
  travelInfo["destination"]= document.getElementById('destination').value;
  travelInfo["departure"]=document.getElementById('departure').value;
  travelInfo["return"]=document.getElementById('return').value;

  // date check
  const dates = {};
  dates["currentDate"] = new Date();
  dates["departureDate"] = new Date(travelInfo.departure);
  dates["returnDate"] = new Date(travelInfo.return);
  console.log(dates);
  if(travelInfo.destination.length == 0 || travelInfo.departure.length == 0 || travelInfo.return.length == 0){
    alert("Text missing :(");
  } else if(dates.currentDate>dates.departureDate || dates.departureDate>dates.returnDate){
    alert("Check Dates!");
  }else{
      console.log(travelInfo);
      const sendText = await Client.getAll(travelInfo,dates);
  }
}

export{
  storeInfo
}
