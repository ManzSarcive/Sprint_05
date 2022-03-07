async function render() {
    let rep = await fetch('https://restcountries.com/v3.1/region/europe')
    let data = await rep.json();
    console.log(data);
    
    
     let results = "";
    
    for(var pays in data){ 
        let virgule= data[pays].population.toLocaleString("en-US");
        let virgules= data[pays].area.toLocaleString("en-US");
    
        results+= `<tr><td class="fw-bold"> ${data[pays].name.official}</td> 
        <td class="text-end"> ${virgules}</td>
        <td class="text-end"> ${virgule}</td>
        <td> ${data[pays].capital}</td></tr>`
    
    
    }
    document.getElementById("tableau").innerHTML= results
    }
    render();



