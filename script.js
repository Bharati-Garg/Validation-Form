let userName = document.getElementById("txtUserName");
let email = document.getElementById("txtEmail");
let pwd = document.getElementById("txtPwd");
let conPwd = document.getElementById("txtConPwd");
let form = document.querySelector("form");


const formValues = [];

function validateInput() {
  //User Name
  if (userName.value.trim() === "") {
    onError(userName, "User Name cannot be empty");
  } else {
    onSuccess(userName);
  }

  //EMAIL
  if (email.value.trim() === "") {
    onError(email, "Email cannot be empty");
  } else {
    if (!isValidEmail(email.value.trim())) {
      onError(email, "Email is not valid");
    } else {
      onSuccess(email);
    }
  }

  //password
  if (pwd.value.trim() === "") {
    onError(pwd, "password cannot be empty");
  } else {
    onSuccess(pwd);
  }

  //confirm password
  if (conPwd.value.trim() === "") {
    onError(conPwd, "password cannot be empty");
  } else {
    if (pwd.value.trim() !== conPwd.value.trim()) {
      onError(conPwd, "Password & Confirm password not matching");
    } else {
      onSuccess(conPwd);

      const formData = {
        username: userName.value,
        email: email.value,
        password: pwd.value,
        confirmPassword: conPwd.value,
      };

      formValues.push(formData);
      form.reset();

      alert("form submitted successfully!");
      console.log("Form Inputs:", formValues);

      //add form control class
      const usernameClass = txtUserName.parentElement;
      const emailClass = txtEmail.parentElement;
      const passwordClass = txtPwd.parentElement;
      const password2Class = txtConPwd.parentElement;

      usernameClass.className = "form-control";
      emailClass.className = "form-control";
      passwordClass.className = "form-control";
      password2Class.className = "form-control";
    }
  }
}

document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();
  validateInput();
});

function onSuccess(input) {
  let parent = input.parentElement;
  let messageEle = parent.querySelector("small");
  messageEle.style.visibility = "hidden";
  parent.classList.remove("error");
  parent.classList.add("success");
}

function onError(input, message) {
  let parent = input.parentElement;
  let messageEle = parent.querySelector("small");
  messageEle.style.visibility = "visible";
  messageEle.innerText = message;
  parent.classList.add("error");
  parent.classList.remove("success");
}

function isValidEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}


