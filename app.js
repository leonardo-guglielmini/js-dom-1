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


//BONUS-2 Stampa in una ul un array di stringhe dato

let shoppingList= document.getElementById("shopping_list");
//console.log(shoppingList)

let listItems = ["pane","pizza","pasta","lattuga","pomodori"];

const addProductButton = document.getElementById("add_product");

const productInput = document.getElementById("product");
let product = productInput.value;

function displayList(container="shoppingList", list){
    for(let i=0; i< list.length; i++)
        {
            let listItem=document.createElement("li");
            listItem.innerText=list[i];
            container.appendChild(listItem);
        }
}
displayList(shoppingList,listItems);

function addProduct(container,list, item){
    list.push(item);
    //console.log(list[list.length-1])
    let listItem=document.createElement("li");
    listItem.innerText=list[list.length-1]
    container.appendChild(listItem);
}

addProductButton.addEventListener("click", function(){
    const productInput = document.getElementById("product");
    let product = productInput.value;
    if(!product.trim() ){
        alert("Attenzione! Campo vuoto oppure errato")
    }else{
        addProduct(shoppingList,listItems,product);
        productInput.value="";
    }
    //console.log(product)
});



