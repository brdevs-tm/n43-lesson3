const passwordInput = document.querySelector(".password-row input");
const showIcon = document.querySelector(".show-icon");

const loginBtn = document.querySelector(".login-btn");

const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".exit");

const successModal = document.querySelector(".succesfull");

let regex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{}|;:'",.<>?/]).{8,}$/;

showIcon.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    showIcon.src = "../assets/eye.svg";
    passwordInput.type = "text";
  } else {
    showIcon.src = "../assets/show-pass.svg";
    passwordInput.type = "password";
  }
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (regex.test(passwordInput.value)) {
    successModal.style = "opacity: 1; z-index: 9999";
    window.location.href = "https://severyanochka-new.netlify.app/";
  } else {
    modal.style = "top: 10px";
  }
});

closeModal.addEventListener("click", () => {
  modal.style = "top: -200px";
});
