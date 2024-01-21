let currentWindow = 1;
const totalWindows = 15; // Update this as per the number of windows you have
const base64Icon = 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAANlBMVEUAAAD/////mQDMzMyZmZlmZmb4+Pjn59bTfwDAwMC3fwCtqZCGhoYz/2YAgAD/+/BVVVX///+oh7OkAAAAEnRSTlP//////////////////////wDiv78SAAAACXBIWXMAAAsTAAALEwEAmpwYAAABGElEQVQ4ja2TzW6EMAwGx3YSqESl5v0fclcCStmE0gNLlg0c6xNoBvvLDxJ5VqIuD+AKT1pxu8WDkNK6vPMwc+iQEvLOdeOlQ/vj33hJVDKQTyErgQfAuk1qS6Aq+spadajXJlIZrhLW02r+u4PU/Dyiej+M0LZmlbBc8pdQzwIY6IrwfcbJ427R7e65PC7vI3p/IeDyK8NFgnW7AHuGgMwZAihsl6mdj4JA4XLckV14fo5uj8DXxiQC/TlBuyyYPaxRoFefzWfzWZtsPluTWywEI9jdQa82NTo1OgU/Nm5sdOyWBcBUUHq1qdOp06mzsdOx0+nAEWfnAB/zL6AqDNFdnqICqDBE3OUPIwrIQAT3ecGfZxcB/gDW1FLDgGIW7AAAAABJRU5ErkJggg=='; // Replace with your actual base64 string

document.addEventListener('DOMContentLoaded', function() {
    var imageElements = document.querySelectorAll('.icon');

    imageElements.forEach(function(img) {
        img.src = "data:image/png;base64," + base64Icon;
    });
});

function setVH() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setVH);
setVH(); // Call the function to set the initial value


function nextWindow() {
    if (currentWindow < totalWindows) {
        // Hide the current window
        document.getElementById(`window${currentWindow}`).classList.add('hidden');

        // Move to the next window
        currentWindow++;

        // Show the next window
        document.getElementById(`window${currentWindow}`).classList.remove('hidden');
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

// Function to close the error pop-up
function closeErrorPopup(popID) {
    var errorPopup = document.getElementById(popID);
    errorPopup.style.display = 'none';
}

class BitcoinStack {
    constructor(containerId, arr = ['Item']) {
        this.container = document.getElementById(containerId);
        this.stack = arr;
        this.updateStackDisplay();
        this.opcodeCounter = 0; // Initialize the opcode counter
        this.counterDisabled = false;
    }
        
    updateCounter() {  
        if (currentWindow == 10) {
            // Decrement the counter
            if (this.counterDisabled == false) {
                this.opcodeCounter++;
            }

            // Update the display
            document.getElementById('opcode-counter').textContent = this.opcodeCounter;

            // Check if the counter has reached 0
            if (this.opcodeCounter >= 200) {
                // Show error-popup
                var errorPopup = document.getElementById("error-popup-200");
                errorPopup.style.display = 'block';
                this.counterDisabled = true;
            }
        }
    }

    duplicateTop() {
        if (this.stack.length > 0) {
            const topItem = this.stack[this.stack.length - 1];
            this.stack.push(topItem);
            this.updateStackDisplay();
            this.updateCounter();
        }
    }

    concatenateTopTwo() {
        if (this.stack.length > 1) {
            const topItem = this.stack.pop();
            const nextItem = this.stack.pop();
            this.stack.push(nextItem + topItem);
            this.updateStackDisplay();
        }
    }

    concatenateTopTwoLimit(limit, errorPopupId) {
        if (this.stack.length > 1) {
            const topItem = this.stack.pop();
            const nextItem = this.stack.pop();
            const concatenatedItem = nextItem + topItem;
            
            // Calculate the byte size of the concatenated item
            const concatenatedItemSize = new Blob([concatenatedItem]).size;
            
            if (concatenatedItemSize <= limit) {
                this.stack.push(concatenatedItem);
                this.updateCounter();
            } else {
                // Show error-popup
                if (limit == 520) {
                    var errorPopup = document.getElementById(errorPopupId);
                    errorPopup.style.display = 'block';
                } else if (limit == 5000) { 
                    var errorPopup = document.getElementById(errorPopupId);
                    errorPopup.style.display = 'block';
                }
                // Put the items back on the stack
                this.stack.push(nextItem);
                this.stack.push(topItem);
            }
            this.updateStackDisplay();
        }
    }

    updateStackDisplay() {
        this.container.innerHTML = '';
        this.stack.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('stack-item');
            itemDiv.textContent = item;
            this.container.appendChild(itemDiv);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const stack1 = new BitcoinStack('bitcoin-stack-1', ['abc', '123']); // Stack in window 1 with 2 initial items
    const stack2 = new BitcoinStack('bitcoin-stack-2', ['X']); // Stack in window 2 with 1 initial items
    const stack3 = new BitcoinStack('bitcoin-stack-3', ['Item']); // Stack in window 2 with 1 initial items
    const stack4 = new BitcoinStack('bitcoin-stack-4', ['Item']); // Stack in window 2 with 1 initial items
    const stack5 = new BitcoinStack('bitcoin-stack-5', ['Item']); // Stack in window 2 with 1 initial items
    const stack6 = new BitcoinStack('bitcoin-stack-6', ['Item']); // Stack in window 2 with 1 initial items

    // Bind the buttons to the specific stack instance
    document.getElementById('cat-button-1').onclick = () => stack1.concatenateTopTwo();

    document.getElementById('dup-button-2').onclick = () => stack2.duplicateTop();

    document.getElementById('dup-button-3').onclick = () => stack3.duplicateTop();
    document.getElementById('cat-button-3').onclick = () => stack3.concatenateTopTwo();

    document.getElementById('dup-button-4').onclick = () => stack4.duplicateTop();
    document.getElementById('cat-button-4').onclick = () => stack4.concatenateTopTwoLimit('5000', 'error-popup-5000');

    document.getElementById('dup-button-5').onclick = () => {
        stack5.duplicateTop();
    };
    
    document.getElementById('cat-button-5').onclick = () => {
        stack5.concatenateTopTwoLimit('5000', 'error-popup-5000-2');
    };

    document.getElementById('dup-button-6').onclick = () => stack6.duplicateTop();
    document.getElementById('cat-button-6').onclick = () => stack6.concatenateTopTwoLimit('520', 'error-popup-520');
});

function startInstallation(event, popupId) {
    var upgradeButton = event.target;
    var popup = document.getElementById(popupId);
    var elem = popup.querySelector('.installation-bar'); // Selects the installation bar within the popup
    var width = 0; // Reset to 0 for a fresh start

    // Reset the width of the installation bar
    elem.style.width = '0%';

    // Show the popup
    popup.style.display = 'block';

    var intervalId = setInterval(frame, 10);

    function frame() {
        if (width >= 100) {
            clearInterval(intervalId);
            popup.style.display = 'none'; // Hide the popup
            upgradeButton.textContent = 'Next >'; // Change button text to 'Next'
            upgradeButton.onclick = nextWindow; // Change onclick event to nextWindow function
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function reload_browser() {
    window.location.reload();
}
