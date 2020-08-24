// things to check: departure before return, destination is all text+not empty

async function storeInfo(event){
  event.preventDefault();
  const travelInfo = {};
  travelInfo["destination"]= document.getElementById('destination').value;
  travelInfo["departure"]=document.getElementById('departure').value;
  travelInfo["return"]=document.getElementById('return').value;

  // check text entered
  if(travelInfo.destination.length == 0 || travelInfo.departure.length == 0 || travelInfo.return.length == 0){
    alert("Text missing :(");
  } else{
    // check dates
    const currentDate = new Date();
    travelInfo.departure = new Date(travelInfo.departure);
    travelInfo.return = new Date(travelInfo.return);
    console.log(travelInfo);
    if(currentDate>travelInfo.departure || travelInfo.departure>travelInfo.return){
      alert("Check Dates!");
    } else{
      console.log(travelInfo);
      const sendText = await Client.getAll(travelInfo);
    }
  }
}


export{
  storeInfo
}
