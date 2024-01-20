let currentWindow = 1;
const totalWindows = 9; // Update this as per the number of windows you have
const base64Icon = 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAE9WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OTc3NywgMjAyMy8wNi8yNS0yMzo1NzoxNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjMgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTAxLTIwVDA4OjIxOjQ4KzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wMS0yMFQwODoyNDo0OCswMTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wMS0yMFQwODoyNDo0OCswMTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjZiNmVjYTUtMTM3My00NDJiLTkzNDgtNDY4ZGMzNjUyOGJkIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY2YjZlY2E1LTEzNzMtNDQyYi05MzQ4LTQ2OGRjMzY1MjhiZCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjY2YjZlY2E1LTEzNzMtNDQyYi05MzQ4LTQ2OGRjMzY1MjhiZCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NjZiNmVjYTUtMTM3My00NDJiLTkzNDgtNDY4ZGMzNjUyOGJkIiBzdEV2dDp3aGVuPSIyMDI0LTAxLTIwVDA4OjIxOjQ4KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjUuMyAoTWFjaW50b3NoKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5vCn1/AAACj0lEQVRYhe2Xv2vbQBiGH5UsGQ2hhIxZsnTIaAKF/AFtKAQT8BKyyAWDMRk6aClelC1kCfS0ZAuEEGgDhdJJNCC0GDwZNKRkSOLGWCSDMep0HRyptvXDQlK3viD88d1xz3vf3UlnRUrJPB0cHMzvlEKapimzuYU08L29dzhOPxfcsiwACUyZSDTgw0ulVcrl1czww8NDbm5uIttiDfhwgMfHn5nhjtOPhScaAFheWuHX4J6Tk8+Z4P4EkjR3DwC8/a1lMgAFGQB4tRKRVCUYoY0NwLd7WEox7ou0BiLhk78Zld0AjGdvKLlMpF6CSPngmGVIo/8VyF4BH5oDns9AAXBIuQS3wO19bla0AUWJnoWu60G8/r77b+ikqEDez/CsVHW8cw1jvH6JBmr1D4WBDcNAVVUAqtUqhmGE7gazkkU+qqpKVVWlaZryuQoSYioghJDtdjvPhCNVrVY5PT2dysUuQavVLAxcKo1vU41GI9SWuAfeLB8B0G4Z9Gpd7u5GQdtwOAxi96ETxIOnxYiRrnBdN5KRaKDdMoI4Ddy5HgF/+6VRooGkWc/CB0+LaFozcpxKpRKZOz8/Dx8DIUQh/wEAXNdlY2ODcrkMgG3bWJbF/v4+tm1zfHw8bUAIIXd3d7Ftm83NTXq9Lo7TD8We5/H1yye2d5qhPtaP72zvNKfepHHStIm7phBCep4nTdOUgOz1upGx53ny4uwoyE/Gfh9d16VpmtLzvNBjmqa8ODuSuq4H74IQ3B8gTzwP7htQhBBya+t1rrWeVKPxkXq9ztray6m84/RxHzrPJyUov7IAcHl5VZgBGJ8Oh/VwbgYOz8ewVqsVBq9UKjjXI9boTOWd69HkplNCQcGKO8oh3h9nWrfJOsoQ+QAAAABJRU5ErkJggg=='; // Replace with your actual base64 string

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

function showErrorPopup() {
    var errorPopup = document.getElementById("error-popup");
    errorPopup.style.display = 'block';
}

// Function to close the error pop-up
function closeErrorPopup() {
    var errorPopup = document.getElementById("error-popup");
    errorPopup.style.display = 'none';
}

class BitcoinStack {
    constructor(containerId, arr = ['Item']) {
        this.container = document.getElementById(containerId);
        this.stack = arr;
        this.updateStackDisplay();
    }

    duplicateTop() {
        if (this.stack.length > 0) {
            const topItem = this.stack[this.stack.length - 1];
            this.stack.push(topItem);
            this.updateStackDisplay();
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

    concatenateTopTwoTaproot() {
        if (this.stack.length > 1) {
            const topItem = this.stack.pop();
            const nextItem = this.stack.pop();
            const concatenatedItem = nextItem + topItem;
            
            // Calculate the byte size of the concatenated item
            const concatenatedItemSize = new Blob([concatenatedItem]).size;
            
            if (concatenatedItemSize <= 520) {
                this.stack.push(concatenatedItem);
            } else {
                showErrorPopup();
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

    // Bind the buttons to the specific stack instance
    document.getElementById('cat-button-1').onclick = () => stack1.concatenateTopTwo();

    document.getElementById('dup-button-2').onclick = () => stack2.duplicateTop();

    document.getElementById('dup-button-3').onclick = () => stack3.duplicateTop();
    document.getElementById('cat-button-3').onclick = () => stack3.concatenateTopTwo();

    document.getElementById('dup-button-4').onclick = () => stack4.duplicateTop();
    document.getElementById('cat-button-4').onclick = () => stack4.concatenateTopTwoTaproot();
});

function startInstallation(event) {
    var upgradeButton = event.target;
    var popup = document.getElementById("popup-installation");
    var elem = document.getElementById("installation-bar");
    var width = 1;
    var id = setInterval(frame, 10); // Adjust time for how fast you want the bar to fill

    // Show the popup
    popup.style.display = 'block';

    function frame() {
        if (width >= 100) {
            clearInterval(id);
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
