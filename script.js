const item = document.querySelector("#item");
const todolist = document.querySelector("#todolist");

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addtodo(this.value);
    this.value = "";
  }
});

const addtodo = (item) => {
  const listitem = document.createElement("li");
  listitem.innerHTML = `
     ${item}
    <i class="fa fa-times"></i>
    `;

  listitem.addEventListener("click", function () {
    this.classList.toggle("done");
  });
  listitem.querySelector("i").addEventListener("click", function () {
    listitem.remove();
  });

  todolist.appendChild(listitem);
};
