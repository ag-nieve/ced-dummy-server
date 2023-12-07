function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

async function test(){
    console.log("hellow world");
    
    const base_url = 'https://ced-app-d69aa-default-rtdb.asia-southeast1.firebasedatabase.app/plant_sensors.json';

    const ph = getRndInteger(85, 95);

    const temperature = getRndInteger(18, 24);

    const feedlevel = 80;


    const options = {
        method: "POST",
        body: JSON.stringify({
            'humidity': ph,
            'temperature' : temperature,
            'waterlevel': feedlevel,
            'dateTime': new Date().toLocaleString ()
        })
    }

    const response = await fetch(base_url, options);

    if(response.status !== 'number'){
        const result = await response.json();
    }

    
}

setInterval(test, 5000);    