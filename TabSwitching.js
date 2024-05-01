/**
 * Opens a new browser tab with the specified URL from the input field.
 */
function openUrl() {
    const url = document.getElementById('urlInput').value;
    window.open(url, '_blank');
}

/**
 * Global volume level with initial value set to 5.
 */
let volume = 5;

/**
 * Increases the volume and updates the display. Volume cannot exceed 10.
 */
function increaseVolume() {
    if (volume < 10) {
        volume++;
        document.getElementById('volumeInput').value = volume;
    }
}

/**
 * Decreases the volume and updates the display. Volume cannot go below 1.
 */
function decreaseVolume() {
    if (volume > 1) {
        volume--;
        document.getElementById('volumeInput').value = volume;
    }
}

/**
 * Changes the background color of the document to a specified color.
/**
 * Sets the background color of the document based on the color parameter.
 * @param {string} color - The CSS color value.
 */
function changeColor(init) {
    const color = init || document.getElementById('colorInput').value;
     document.body.style.backgroundColor = color;
 }

/**
 * Performs a calculation based on user input and displays the result.
 * Handles basic arithmetic operations and validates input.
 */
function performCalculation() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers.');
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Divide by zero error.');
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert('Invalid operation.');
            return;
    }
    document.getElementById('result').value = result.toFixed(2);
}

/**
 * Controls the tab switching in the UI.
 * @param {Event} evt - The DOM event.
 * @param {string} tabName - The name of the tab to open.
 */
function openTab(evt, tabName) {
    // Get all elements with class="tabcontent" and hide them
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablink" and remove the class "active"
    var tablinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    console.log("Tab opened:", tabName); // Debugging line
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("tablink")[0].click(); // Opens the first tab by default
});


document.addEventListener("DOMContentLoaded", function() {
    const hoverButtons = document.querySelectorAll('.hover-button');
    
    hoverButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            const hoverImage = this.getAttribute('data-hover');
            this.src = hoverImage;
        });

        button.addEventListener('mouseout', function() {
            const normalImage = this.getAttribute('data-normal');
            this.src = normalImage;
        });
    });
});
