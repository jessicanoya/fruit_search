const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let results = [];
  const searchFruit = str.toLowerCase(); // Convert input to lower case

  results = fruit.filter((fruitName) => {
    // Check if the fruit name contains the search term
    return fruitName.toLowerCase().includes(searchFruit);
  });
  // DEBUG
  // console.log(results)
  return results;
}

// Event handler for keyup event on input field
function searchHandler(event) {
  const inputValue = event.target.value;
  // DEBUG
  // console.log(inputValue)
  const searchResults = search(inputValue);
  showSuggestions(searchResults, inputValue);
}

// Function to display suggestions
function showSuggestions(results, inputVal) {
  // Clear previous suggestions
  suggestions.innerHTML = "";

  // Display new suggestions
  results.forEach((result) => {
    const option = document.createElement("option"); // Create an option
    option.textContent = result; // Set text content to the result
    // DEBUG
    // console.log(result);
    suggestions.appendChild(option); // Append list item to suggestions list
  });
}

function useSuggestion(event) {
  const selectedFruit = event.target.value;
  if (selectedFruit) {
    input.value = selectedFruit;
  }
  suggestions.innerHTML = "";
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);