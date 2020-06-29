/* wind chill */
    /* get temp & speed from html and convert to numbers */
    const tempNumber = parseFloat(document.getElementById('temp').textContent);
    //console.log(tempNumber);
    const speedNumber = parseFloat(document.getElementById('speed').textContent);
    //console.log(speedNumber);
    
        /* wind chill formula */
    let windChill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, 0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
    //console.log(windChill);
    windChill = Math.round(windChill);
    //console.log(windChill);
    
        /* checking */
    if(tempNumber<=50 && speedNumber>3) {
        document.getElementById('chill').textContent = "Wind Chill: "+windChill+"\xB0F";
    }
        else {
            document.getElementById('chill').textContent = "N/A";
        }