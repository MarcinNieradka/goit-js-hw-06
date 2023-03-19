const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  nameInput.value === ""
    ? (nameOutput.textContent = "Anonymous")
    : (nameOutput.textContent = nameInput.value);
});

// OR
// nameInput.addEventListener("input", (e) => {
//     e.currentTarget.value === "" ? (nameOutput.textContent = "Anonymous") : (nameOutput.textContent = e.currentTarget.value);
// });
