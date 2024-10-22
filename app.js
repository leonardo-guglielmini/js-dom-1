const lampOn = document.getElementById("lamp_on");
const lampOff = document.getElementById("lamp_off");
const lightLamp =  document.getElementById("light-lamp");

function changeLampStatus(){
    if(lightLamp.classList.contains("off")){
        lampOff.classList.add("hidden");
        lampOn.classList.remove("hidden");
        lightLamp.classList.add("on");
        lightLamp.classList.remove("off");
        lightLamp.innerText="Spegni";
    }else{
        lampOn.classList.add("hidden");
        lampOff.classList.remove("hidden");
        lightLamp.classList.add("off");
        lightLamp.classList.remove("on");
        lightLamp.innerText="Accendi";
    }
}

lightLamp.addEventListener('click', changeLampStatus);

