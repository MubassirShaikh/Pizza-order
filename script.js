// Get the pizza container and the ingredients container
const pizzaContainer = document.getElementById("pizza-container");
const ingredientsContainer = document.getElementById("ingredients-container");

// Add event listeners for the ingredients
const toppings = document.querySelectorAll(".topping");
for (const topping of toppings) {
  // Set the draggable attribute on the topping
  topping.setAttribute("draggable", true);
  // Add an event listener for when the topping is dragged
  topping.addEventListener("dragstart", handleToppingDragStart);
}

// Add an event listener for when the pizza base is dropped on
pizzaContainer.addEventListener("drop", handlePizzaDrop);

// Add an event listener for when an item is dragged over the pizza container
pizzaContainer.addEventListener("dragover", handlePizzaDragOver);

// Function to handle the drag start event for a topping
function handleToppingDragStart(event) {
  // Set the data transfer to the data-topping attribute of the topping
  event.dataTransfer.setData("text/plain", event.target.getAttribute("data-topping"));
}

// Function to handle the drop event for the pizza container
function handlePizzaDrop(event) {
  // Get the data from the data transfer
  const data = event.dataTransfer.getData("text/plain");
  // Create an image element for the dropped topping
  const toppingImage = document.createElement("img");
  // Set the source and alt attributes of the
// topping image
switch (data) {
    case "pepperoni":
    toppingImage.src = "images/topping_pepperoni.png";
    toppingImage.alt = "Pepperoni";
    break;
    case "mushrooms":
    toppingImage.src = "images/topping_mushrooms.png";
    toppingImage.alt = "Mushrooms";
    break;
    case "olives":
    toppingImage.src = "images/topping_olives.png";
    toppingImage.alt = "Olives";
    break;
    default:
    // If the data is not a recognized topping, do nothing
    return;
    }
    // Set the class name of the topping image to "topping-image"
    toppingImage.className = "topping-image";
    // Add the topping image to the pizza container
    pizzaContainer.appendChild(toppingImage);
    }
    
    // Function to handle the drag over event for the pizza container
    function handlePizzaDragOver(event) {
    // Prevent the default action of the event
    event.preventDefault();
    }