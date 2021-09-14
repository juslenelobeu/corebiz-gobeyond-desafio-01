const sendLocalStorage = document.getElementById("sendLocalStorage");

sendLocalStorage.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msgValidateName = document.querySelector(".validate--name");
  const msgValidateEmail = document.querySelector(".validate--email");

  if (name && email) {
    console.log("yes");
    const formValues = {
      name,
      email,
    };
    const convertValues = JSON.stringify(formValues);
    localStorage.setItem("newsletter", convertValues);
  }
  if (name === "") {
    msgValidateName.classList.add("visible");
  } else {
    msgValidateName.classList.remove("visible");
  }
  if (email === "") {
    msgValidateEmail.classList.add("visible");
  } else {
    msgValidateEmail.classList.remove("visible");
  }
});
