let currentWindow = 1;
const totalWindows = 3; // Update this as per the number of windows you have

function nextWindow() {
    if (currentWindow < totalWindows) {
        document.getElementById(`window${currentWindow}`).style.display = 'none';
        currentWindow++;
        document.getElementById(`window${currentWindow}`).style.display = 'block';
    } else {
        // You can handle the end of the sequence here, such as hiding the Next button or redirecting to another page
        alert("You've reached the end of the OP_CAT tutorial.");
    }
}