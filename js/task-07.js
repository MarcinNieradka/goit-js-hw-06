const sizeCtrl = document.getElementById("font-size-control");
const mainTxt = document.getElementById("text");
mainTxt.style.fontSize = `${sizeCtrl.value}px`;

sizeCtrl.addEventListener("input", (e) => {
  mainTxt.style.fontSize = `${e.currentTarget.value}px`;
  //OR
  // mainTxt.style.fontSize = `${sizeCtrl.value}px`;
});
