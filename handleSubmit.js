// When the page loads, focus on the search field
window.onload = function () {
  document.getElementById("searchField").focus();
};

// Handle the form submission, automatically redirect to input URL, disregard if not URL
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

// This defines an array of text options for the dynamic text
const textOptions = [
  "Hi Bata. Let's browse",
  "What will it be for today, Bata?",
  "Let's browse, Bata",
  "Happy browsing, Bata",
  "Awaiting your input",
];

// Get a random text from the textOptions array
function getRandomText() {
  const randomIndex = Math.floor(Math.random() * textOptions.length);
  return textOptions[randomIndex];
}

// Update the dynamic text in the <h1> tag with a random text from the textOptions array
document.getElementById("dynamic-text").textContent = getRandomText();
