const form = document.querySelector(".login-form");
const formData = {};
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Allert, pls write something!");
  }

    formData.email = email.value;
  formData.password = password.value;

  console.log(formData);
    
  event.currentTarget.reset();
}