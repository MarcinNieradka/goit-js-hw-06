const mainInput = document.getElementById("validation-input");
const inputLength = Number(mainInput.dataset.length);

mainInput.addEventListener("blur", (e) => {
  // console.log(typeof e.currentTarget.value.length);
  // console.log(typeof e.currentTarget.dataset.length);

  // ------ 3rd version
  mainInput.value.length === inputLength
    ? (mainInput.className = "valid")
    : (mainInput.className = "invalid");

  // OR
  // ------ 2nd version
  // mainInput.value.length === Number(mainInput.dataset.length)
  //   ? (mainInput.className = "valid")
  //   : (mainInput.className = "invalid");

  // OR
  // ------ 1st version
  // mainInput.value.length === +mainInput.dataset.length
  //   ? (mainInput.className = "valid")
  //   : (mainInput.className = "invalid");
});
