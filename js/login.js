import displayMessage from "./components/displayMessage.js";
import { url } from "./settings/api.js";
import { saveToken, saveUser } from "./components/localStorage.js";
import menu from "./components/menu.js";
const form = document.querySelector(".form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector(".message-container");
menu();
form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  message.innerHTML = "";
  const valueName = username.value.trim();
  const valuePassword = password.value.trim();

  if (valueName.length === 0 || valuePassword.length === 0) {
    displayMessage("warning", "No values", ".message-container");
  }
  logIn(valueName, valuePassword);
}

async function logIn(username, password) {
  const authUrl = url + "auth/local";

  const data = JSON.stringify({ identifier: username, password: password });
  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(authUrl, options);
    const json = await response.json();
    console.log(json);

    if (json.user) {
      saveToken(json.jwt);
      saveUser(json.user);
      location.href = "/";
    }
    if (json.error) {
      displayMessage("warning", "...", ".message-container");
    }
  } catch (error) {
    console.log(error);
  }
}
