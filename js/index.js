import { url } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import menu from "./components/menu.js";
menu();

const productUrl = url + "products";

(async function () {
  const container = document.querySelector(".item-container");

  try {
    const response = await fetch(productUrl);
    const json = await response.json();

    container.innerHTML = "";

    json.forEach(function (product) {
      container.innerHTML += `  
                                    <div class="product"id=${product.id}">
                                    
                                    <img src="https://picsum.photos/id/738/300/200" class="card-img-top" alt="Responsive image">
                                    <div class="card-body">
                                      <h5 class="card-title">${product.name}</h5>
                                      <p class="card-text">${product.description}</p>
                                    </div>
                                    <div class="card-footer">
                                      <small class="text-muted">Price: ${product.price}</small>
                                    </div>
                                    </div>
                                    `;
    });
  } catch (error) {
    displayMessage("error", error, ".item-container");
  }
})();
