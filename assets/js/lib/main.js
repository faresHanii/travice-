// Get the DOM elements
const linkElement = document.getElementById('myLink');
const opentime = new Date();
opentime.setHours(8, 0, 0); // Set the opening time to 8:00:00 am
const endTime = new Date();
endTime.setHours(17, 0, 0); // Set the closing time to 5:00:00 pm

function checkTimeAndDisplayMessage() {
  const currentTime = new Date();

  if (currentTime >= opentime && currentTime < endTime) {
    alert('They are working now');
  } else {
    alert('They are going to sleep now');
  }
}

// Call the function to check the time initially


// Attach the event listener to the linkElement to check the time when clicked
linkElement.addEventListener('onclick', checkTimeAndDisplayMessage);
