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
    const dep = new Date(travelInfo.departure);
    const ret = new Date(travelInfo.return);
    console.log(travelInfo);
    if(currentDate>dep || dep>ret){
      alert("Check Dates!");
    } else{
      const sendText = await Client.getAll(travelInfo);
    }
  }
}


export{
  storeInfo
}
