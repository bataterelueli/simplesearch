window.onload = function () {
  document.getElementById("searchField").focus();
};

function handleSubmit(event) {
  var searchInput = document.getElementById("searchField").value;
  var urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/;
  if (urlPattern.test(searchInput)) {
    if (
      !searchInput.startsWith("http://") &&
      !searchInput.startsWith("https://")
    ) {
      searchInput = "https://" + searchInput;
    }
    window.location.href = searchInput;
    event.preventDefault();
    return false;
  }
  return true;
}

const textOptions = [
  "Hi Bata. Let's browse",
  "What will it be for today, Bata?",
  "Let's browse, Bata",
  "Happy browsing, Bata",
  "Awaiting your input",
];

// Function to pick random text from the array
function getRandomText() {
  const randomIndex = Math.floor(Math.random() * textOptions.length);
  return textOptions[randomIndex];
}

// Get the h1 element and change its text
document.getElementById("dynamic-text").textContent = getRandomText();
