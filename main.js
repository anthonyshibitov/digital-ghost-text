console.log("linked!");

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
          } else {
          }
        }, j * (delay / 5))
      }
      if(i == string.length - 1){
        trailingChar.classList.add("black-final");
      }
    }, delay * i)
  }
}

setTimeout(() => {
  printText("I'm afraid they're gonna find you.", "text", 100);
}, 5000)

setTimeout(() => {
  printText("And there's nothing that I can do.", "text-2", 100);
}, 10000)

setTimeout(() => {
  printText("A century of your priceless time.", "text", 100);
}, 15000);

setTimeout(() => {
  printText("To commit a victimless crime.", "text-2", 100);
}, 20000);

setTimeout(() => {
  printText("finished", "fin", 100);
}, 25000)
