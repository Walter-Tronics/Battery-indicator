window.onload = ()=>{

    getStatus();

    //Battery Status starts
    let bar = document.getElementById("bar");
    let detail = document.getElementById("detail");
    let per = document.getElementById("per");
    async function getStatus(){
    let battMan = await navigator.getBattery();

    console.log(battMan);
    
    per.innerHTML = Math.round((battMan.level * 100)) + "%";
    bar.style.width = (battMan.level * 100) + "%";

    //Calling the color specifier function
    barColorChange();

    //Getting the Percentage
    battMan.addEventListener('levelchange',()=>{
        per.innerText = Math.round(battMan.level * 100) + "%";
        bar.style.width = (battMan.level * 100) + "%";
        barColorChange();
    });

    //Changing Bar Color
    function barColorChange(){
    if ((battMan.level * 100) > 75) {
        bar.style.background="linear-gradient(90deg, #e70404,#ff4500,#ffeb3b, #03a9f4, #00ff62)";
    }
    else if ((battMan.level * 100) > 50) {
        bar.style.background="linear-gradient(90deg, #e70404,#ff4500,#ffeb3b, #03a9f4)";
    }
    else if ((battMan.level * 100) > 30) {
        bar.style.background="linear-gradient(90deg, #e70404,#ff4500,#ffeb3b)";
    }
    else if ((battMan.level * 100) > 15) {
        bar.style.background="linear-gradient(90deg, #e70404,#ff4500)";
    }
    else{
        bar.style.background="Red";
        document.getElementById("batCont").style.border="3px solid red";
    }
    }

    //Checking for animation possibility when device is plugged in
    //battMan.addEventListener('chargingchange',()=>{
        if (battMan.charging) {
            bar.classList.add('move');
            detail.innerText="Charging...";
            barColorChange();
        }else{
            bar.classList.remove('move');
            detail.innerText="Discharging";
            barColorChange();
        }
        if (battMan.level === 1 && battMan.charging) {
            detail.innerHTML="Charged";
            barColorChange();
        }
    //});

    /*
    if (battMan.charging) {
        bar.setAttribute('class','class1');
        detail.innerText="Charging...";
        barColorChange();

    }else{
        bar.removeAttribute('class','class1');
        detail.innerText="Discharging";
        barColorChange();
    }
    if (battMan.level===1&&battMan.charging) {
        detail.innerHTML="Charged";
        barColorChange();
    }
    */
   
   //Checking for animation ends
    }
}