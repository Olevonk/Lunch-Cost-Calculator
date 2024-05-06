/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Oleksii Fon Krupp
      Date:   05-05-2024

      Filename: project03-01.js
*/
let menuItems = document.getElementsByClassName("menuItem");

// Looping through all elements of the menuItems collection
for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener("click", calcTotal);
  }

// Function to calculate the total cost of the customer order
function calcTotal() {
    let orderTotal = 0;
  
      // Looping through all elements of the menuItems collection
      for (let i = 0; i < menuItems.length; i++) {
          if (menuItems[i].checked) {
              orderTotal += Number(menuItems[i].value);
          }
      }
  
      // Changing the innerHTML property of the element with id "billTotal" to the total order cost
      document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
  }

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }