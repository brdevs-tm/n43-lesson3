const passwordInput = document.querySelector(".password-row input");
const showIcon = document.querySelector(".show-icon");

showIcon.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    showIcon.src = "../assets/eye.svg";
    passwordInput.type = "text";
  } else {
    showIcon.src = "../assets/show-pass.svg";
    passwordInput.type = "password";
  }
});
