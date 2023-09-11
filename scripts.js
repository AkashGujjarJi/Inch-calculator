
function calculate() {
    const x = parseFloat(document.getElementById("inputX").value);
    const y = parseFloat(document.getElementById("inputY").value);

    if (!isNaN(x) && !isNaN(y) && y !== 0) {
        const a = Math.floor(x / y);
        const b = Number((x / y - a) * 8).toFixed(2);

        document.getElementById("customResult").innerHTML = `${a} inches ${b} soot`;
    } else {
        document.getElementById("customResult").innerHTML = "Invalid input. Please enter valid numbers.";
    }
}

function clearDisplayOfCustom() {
    document.getElementById('customResult').innerHTML = '';
    document.getElementById('inputX').value = '';
}



function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearEntry() {
    const currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    const currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function calculateResult() {
    try {
        const expression = document.getElementById('display').value;
        const result = eval(expression);
        if (isNaN(result) || !isFinite(result)) {
            document.getElementById('display').value = 'Error';
        } else {
            document.getElementById('display').value = result;
            document.getElementById('inputX').value = result;
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Keyboard support
// document.addEventListener('keydown', (event) => {
//     const key = event.key;
//     if (/[\d+\-*/.=]|Enter|Backspace/.test(key)) {
//         event.preventDefault();
//         if (key === '=' || key === 'Enter') {
//             calculateResult();
//         } else if (key === 'C' || key === 'c') {
//             clearDisplay();
//         } else if (key === 'Backspace') {
//             backspace();
//         } else if (key === 'E' || key === 'e') {
//             clearEntry();
//         } else {
//             appendToDisplay(key);
//         }
//     }
// });

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Function to toggle theme and button text
function toggleTheme() {
    body.classList.toggle("dark-theme");
    if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark-theme");
        themeToggle.textContent = "...🌕";
    } else {
        localStorage.removeItem("theme");
        themeToggle.textContent = "🌑...";
    }
}

// Check local storage for theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
    if (savedTheme === "dark-theme") {
        themeToggle.textContent = "...🌕";
    }
}

// Add event listener to toggle and update button text
themeToggle.addEventListener("click", toggleTheme);
