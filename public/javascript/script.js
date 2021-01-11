let form = document.querySelector(".form");
let title = document.querySelector("#inputName");
let addGoal = document.querySelector(".add-item");

function displayTitle(event){
  event.preventDefault();

  console.log(title)
}

addGoal.addEventListener('submit', displayTitle)