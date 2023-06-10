console.log("linked!");

//const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alpha = "!@#$%^&*()_+-={}|:\"<>?[]\\;',./`~";

function printText(string, id, delay){
  const elementId = document.getElementById(id);
  if(!elementId) {
    console.log("element not found :(");
    return;
  }

  if(string.length == 0){
    console.log("empty string");
  }

  elementId.innerHTML = "";

  for(let i = 0; i <= string.length; i++){
    setTimeout(() => {
      let trailingChar = document.createElement('span');
      trailingChar.classList.add("black");
      for(let j = 0; j < 5; j++){
        setTimeout(() => {
          elementId.appendChild(trailingChar);
          if(i != string.length) {
            if(j == 4){
              trailingChar.innerHTML = string.split('')[i];
              return;
            }
            let random = alpha[Math.floor(Math.random() * alpha.length)];
            trailingChar.innerHTML = random;
          }
        }, j * (delay / 5))
      }
    }, delay * i)
  }
}

setTimeout(() => {
  printText("I'm afraid they're gonna find you.", "text", 100);
},0)

setTimeout(() => {
  printText("And there's nothing that I can do.", "text", 100);
}, 5000)