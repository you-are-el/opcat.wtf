let currentWindow = 1;
const totalWindows = 2; // Update this as per the number of windows you have

function nextWindow() {
    if (currentWindow < totalWindows) {
        // Hide the current window
        document.getElementById(`window${currentWindow}`).classList.add('hidden');

        // Move to the next window
        currentWindow++;

        // Show the next window
        document.getElementById(`window${currentWindow}`).classList.remove('hidden');
    } else {
        // Handle the end of the sequence, such as hiding the Next button or redirecting to another page
        alert("You've reached the end of the OP_CAT tutorial.");
    }
}

function previousWindow() {
    if (currentWindow > 1) {
        // Hide the current window
        document.getElementById(`window${currentWindow}`).classList.add('hidden');

        // Move to the previous window
        currentWindow--;

        // Show the previous window
        document.getElementById(`window${currentWindow}`).classList.remove('hidden');
    } else {
        // Handle the case when there are no more previous windows
        alert("This is the first step of the OP_CAT tutorial.");
    }
}
