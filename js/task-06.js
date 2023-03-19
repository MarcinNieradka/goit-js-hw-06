const mainInput = document.getElementById("validation-input");
// console.log(mainInput.dataset.length);

mainInput.addEventListener("blur", (e) => {
  // console.log(typeof e.currentTarget.value.length);
  // console.log(typeof e.currentTarget.dataset.length);
  mainInput.value.length === +mainInput.dataset.length
    ? (mainInput.className = "valid")
    : (mainInput.className = "invalid");
});
