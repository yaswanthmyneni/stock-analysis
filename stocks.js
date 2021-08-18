var initialPrice = document.querySelector("#initial-price");
var numberOfStocks = document.querySelector("#number-of-stocks");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-button");
var result = document.querySelector("#result");

var colors = {
  red: "#FF0000",
  green: "rgb(54, 168, 163)",
  black: "#000000",
};

var showOutput = (message, color) => {
  result.innerText = message;
  result.style.color = color;
};

var calculateProfitOrLoss = (initial, quantityOfStocks, current) => {
  if (initial > current) {
    //loss logic here
    var loss = (initial - current) * quantityOfStocks;
    var lossPercent = (loss / initial) * 100;
    showOutput(
      `The loss is ${loss} and the percentage of loss is ${lossPercent}%`,
      colors.red
    );
  } else if (initial < current) {
    //profit logic here
    console.log(current, initial);
    var profit = (current - initial) * quantityOfStocks;
    var profitPercent = (profit / initial) * 100;
    showOutput(
      `The profit is ${profit} and the percentage of profit is ${profitPercent}%`,
      colors.green
    );
  } else {
    showOutput(`No Loss No Gain!!!`, colors.black);
  }
};

var clickHandler = () => {
  var initial = Number(initialPrice.value);
  var quantityOfStocks = Number(numberOfStocks.value);
  var current = Number(currentPrice.value);

  if (initial === 0 || quantityOfStocks === 0 || current === 0) {
    showOutput(`Please fill all the fields`);
  } else {
    calculateProfitOrLoss(initial, quantityOfStocks, current);
  }
};

submitBtn.addEventListener("click", clickHandler);
