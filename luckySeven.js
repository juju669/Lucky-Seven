


function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function play() {
  var start =(document.getElementById("bet").value);
  var money = Number(start);
  var firstDie = 0;
  var secondDie = 0;
  var diceSum;
  var max = 0;
  var rollsNum = 0;
  var rollsAtMax = 0;

  if (money <= 0) {
    alert("Starting bet needs to be greater than $0");
    }
  else {
    while (money > 0) {
      firstDie = rollDice();
      secondDie = rollDice();
      diceSum = firstDie + secondDie;
      rollsNum++;
      if (diceSum == 7) {
        money += 4;
        console.log("won");
        }
      else{
        money--;
         if (money > max) {
          max += money - max;
          rollsAtMax = rollsNum;
          }
        console.log("lost");
      }
    }
  }
  document.getElementById("results").style.display = "block";
  document.getElementById("submitButton").innerText = "Play Again!";
  document.getElementById("start").innerText = start;
  document.getElementById("rollsNum").innerText = rollsNum;
  document.getElementById("max").innerText = max;
  document.getElementById("rollsAtMax").innerText = rollsAtMax;
  return false;
}
