const rate = 5.5;

// edit title content
let resultTitle = document.getElementById("resultTitle");
resultTitle.innerHTML =
  resultTitle.innerHTML + " (Taxa Dólar = R$ " + rate.toFixed(2) + ")";

function calcValue(curr) {
  let originValue = parseFloat(
    prompt("Qual o valor em que você quer converter (" + curr + ")?")
  );

  let calculateValue;
  switch (curr) {
    case "USD":
      calculateValue = originValue * rate;
      addResult(originValue, calculateValue);
      break;
    case "BRL":
      calculateValue = originValue / rate;
      addResult(calculateValue, originValue);
      break;
    default:
      break;
  }
}

function addResult(valUSD, valBRL) {
  let table = document.getElementById("resultTab");

  // if parameter is empty or -1 add row to the end of the table
  let newRow = table.insertRow();
  newRow.classList.add("calc-result-table-row-results");

  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = "$ " + valUSD.toFixed(2); // Set value
  cell1.classList.add("calc-result-results"); // Set style

  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = "R$ " + valBRL.toFixed(2); // Set value
  cell2.classList.add("calc-result-results"); // Set style
}

function clearResults() {
  let table = document.getElementById("resultTab");
  let results = table.getElementsByTagName('tr');
  let rowCount = results.length;

  for (let i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}
