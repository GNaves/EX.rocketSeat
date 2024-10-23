const form = document.querySelector("form");
const input = document.querySelector("input");
const items = document.querySelector("ul");
const notification = document.querySelector(".notification");
const itemsList = document.querySelector(".list-item");
const deleteButton = document.querySelector(".delete-button");

const regex = /\D+/g 

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const newItems = document.createElement("li");
  const itemName = document.createElement("span");
  const itemButton = document.createElement("button");
  const buttonImage = document.createElement("img");


  if(input.value == ""){
    alert("Insira um valor no campo")
  }
  else if(!regex.test(input.value)) {
    alert("Somente letras são permitidas!")
    input.value = ""
  }
  else {
    itemName.textContent = input.value;
    itemButton.classList.add("delete-button")
    buttonImage.src = "./assets/button.png"
    buttonImage.alt = "Delete";
    itemButton.appendChild(buttonImage)

    newItems.appendChild(itemName)
    newItems.appendChild(itemButton)
    newItems.classList.add("list-item")
    items.append(newItems);

    input.value = ""
  }
});


items.addEventListener("click", (event) => {
  if (event.target.closest(".delete-button")) {
    const listItem = event.target.closest(".list-item");
    listItem.remove(); 

    notification.classList.add("show-notification");
    setTimeout(() => {
      notification.classList.remove("show-notification");
    }, 3000);
  }
});