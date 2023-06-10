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
          // let textContents = elementId.innerHTML.split('');
          // let stringContents = string.split('');
          // if(i != string.length){ //change to if j == 4
          //   textContents[textContents.length - 1] = alpha[Math.floor(Math.random() * alpha.length)];
          //   elementId.innerHTML = textContents.join('');
          // }
          if(i != string.length) {
            if(j == 4){
              // trailingChar.classList.remove("black");
              trailingChar.innerHTML = string.split('')[i];
              console.log("string pos", string.split('')[i]);
              return;
            }
            let random = alpha[Math.floor(Math.random() * alpha.length)];
            trailingChar.innerHTML = random;
          }
        }, j * (delay / 5))
      }
      // elementId.innerHTML = string.substring(0, i);
    }, delay * i)
  }
}

setTimeout(() => {
  printText("I'm afraid they're gonna find you.", "text", 20);
},0)

setTimeout(() => {
  printText("And there's nothing that I can do.", "text", 20);
}, 5000)