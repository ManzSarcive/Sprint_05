

async function render() {

    try {
        let resp = await fetch('https://restcountries.com/v3.1/region/europe')
        if (resp.ok){
        let data = await resp.json();
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
    document.getElementById("tableau").innerHTML= results;
    let btn = document.createElement("button");
    let text = document.createTextNode("Refresh table");
    btn.classList= "btn btn-outline-dark btn-info"
    btn.appendChild(text);
    document.getElementById("btn_refresh").textContent = "";
    document.getElementById("btn_refresh").appendChild(btn);
btn.addEventListener("click", function(){
render();})
  
        }

    }    

    
    catch(e) {
        console.error(e)
        console.log("dans le catch")
        let btn = document.createElement("button")
        let text = document.createTextNode("Refresh table")
        btn.appendChild(text)
        document.getElementById("btn_refresh").textContent = "";
        document.getElementById("btn_refresh").appendChild(btn)
        
        
btn.addEventListener("click", function(){
    render();
})
    }

    
    
}
    render();



    



