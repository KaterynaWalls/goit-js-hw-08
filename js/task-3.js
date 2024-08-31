const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

function updateGreeting() {
    const trimedValue = nameInput.value.trim();
    if (trimedValue === '') {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = trimedValue;
    }
}
nameInput.addEventListener("input", updateGreeting);
    
