const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;
  // console.log(email.value);
  // console.log(password.value);

  if (email.value === "" || password.value === "") {
    alert("Proszę podać email i hasło");
  } else {
    const user = {
      email: email.value,
      password: password.value,
    };
    console.log(user);
    e.currentTarget.reset();
  }
});
