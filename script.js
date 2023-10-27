// JavaScript functions for the Tip Calculator

function calculateTip() {
  var billTotal = parseFloat(document.getElementById("billTotal").value);
  var tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
  var tipAmount = billTotal * (tipPercentage / 100);
  var totalBill = billTotal + tipAmount;

  if (isNaN(billTotal) || billTotal <= 0) {
    alert("Please enter a valid bill amount greater than 0.");
    return;
  }

  document.getElementById("tipAmount").value = tipAmount.toFixed(2); // Update the value property of the disabled input
  document.getElementById("totalBill").value = totalBill.toFixed(2); // Update the value property of the disabled input
  document.getElementById("tipPercentageOutput").value = tipPercentage + "%"; // Update the value property of the tip percentage output
}

document.getElementById("tipForm").addEventListener("input", calculateTip); // Added event listener
