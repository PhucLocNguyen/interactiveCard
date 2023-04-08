
let number, value, arrLength, i, indexClean,tmp, cleanArrLength, count =0;
const cleanArr = [], cleanName = [];

document.getElementById("cardNumberInput").addEventListener("keyup", getNumber);

function getNumber(){
let count = 0;
  let reloadValue =  document.getElementById("cardNumberInput");
  value = reloadValue.value;
const test = value.search("[A-Za-z]");
const newArr = new String(value);

if(test === -1 && newArr.length <=16 ){
        reloadValue.classList.remove("errorInput");
}
    else reloadValue.classList.add("errorInput");  
    value = value.slice(0,4)+" "+value.slice(4,8) +" "+ value.slice(8,12)+" "+value.slice(12,16);

    document.getElementById("serialValue").innerHTML = `${value}`;

}   

document.getElementById("nameInput").addEventListener("keyup", getName);

function getName(){
    
    let reloadValue =  document.getElementById("nameInput");
    value = reloadValue.value;
    const test = value.search("[0-9]");
  
     if(test === -1 ){
        reloadValue.classList.remove("errorInput");
    }
    else reloadValue.classList.add("errorInput");   
    document.getElementById("nameDisplay").innerHTML = `${value}`;
    
 
}

document.getElementById("month").addEventListener("keyup", getNumberMonth);
document.getElementById("year").addEventListener("keyup", getNumberYear);
document.getElementById("cvcInput").addEventListener("keyup", getNumberCVC);
function getNumberMonth(){
    let count = 0;
      let reloadValue =  document.getElementById("month");
      value = reloadValue.value;
        value = parseInt(value);

    
    if(value >=0  && value <=12 ){
            reloadValue.classList.remove("errorInput");
    } else  reloadValue.classList.add("errorInput");
    document.getElementById("monthDisplay").innerHTML = `${value}`;
}   
function getNumberYear(){
    let count = 0;
   
      let reloadValue =  document.getElementById("year");
      value = reloadValue.value;
   
        value = parseInt(value);

    
    if(value >=0  && value <=99 ){
            reloadValue.classList.remove("errorInput");
    } else  reloadValue.classList.add("errorInput");
    console.log(value)
    document.getElementById("yearDisplay").innerHTML = `${value}`;
}   

function getNumberCVC(){
  let count = 0;
 
    let reloadValue =  document.getElementById("cvcInput");
    value = reloadValue.value;
 
      value = parseInt(value);

  
  if(value >=0  && value <=999 ){
          reloadValue.classList.remove("errorInput");
  } else  reloadValue.classList.add("errorInput");

  document.getElementById("cvcDisplay").innerHTML = `${value}`;
}   
