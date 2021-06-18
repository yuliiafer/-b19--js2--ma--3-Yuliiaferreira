import { getUser } from "./localStorage.js";

export default function menu() {
  const { pathname } = document.location;
  const container = document.querySelector(".menu-container");
  const username = getUser();
  let link = `<a href = "login.html" class="${pathname === "/login.html" ? "active" : ""}">Login</a>`;

  if (username) {
    link = `<span class="navbar-text">${username}</span>`;
  }

  container.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div class="menu">
                                <a href="/" class="${
                                    pathname === "/" ? "active" : ""
                                }">Home</a>
                                ${link}
                            </div></nav>`;
}
