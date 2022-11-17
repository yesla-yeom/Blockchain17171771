const signupBtn = document.getElementById("signup-btn");
const signupIdInput = document.getElementById("signup-id-input");
const signupPwInput = document.getElementById("signup-pw-input");
const signupNameInput = document.getElementById("signup-name-input");
const signupEmailInput = document.getElementById("signup-email-input");

signupBtn.onclick = async () => {
  console.log(signupIdInput.value);
  console.log(signupPwInput.value);
  console.log(signupNameInput.value);
  console.log(signupEmailInput.value);

  await axios.post("/api/signup", {
    ID: signupIdInput.value,
    PW: signupPwInput.value,
    Name: signupNameInput.value,
    Email: signupEmailInput.value,
  });
};
