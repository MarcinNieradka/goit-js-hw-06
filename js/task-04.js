const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueSpan = document.getElementById("value");
let counterValue = 0;

// ============ EVENT LISTENERS START

incrementBtn.addEventListener("click", () => {
  valueSpan.textContent = ++counterValue;
  // OR
  // counterValue++;
  // valueSpan.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  valueSpan.textContent = --counterValue;
  // OR
  // counterValue--;
  // valueSpan.textContent = counterValue;
});
// ============ EVENT LISTENERS END
