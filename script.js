// Assuming you have an HTML textbox with id "numberInput" and a button with id "addButton"
let numberInput = document.getElementById("number11");
let addButton = document.getElementById("addButton");
let sum = 0;

addButton.addEventListener("click", function() {
  let number = parseFloat(numberInput.value); // Parse the input value as a floating-point number
  if (!isNaN(number)) {
    sum += number; // Add the number to the sum
    number11.value = ""; // Clear the input field
    console.log("Current sum: " + sum);
  }
});

}


