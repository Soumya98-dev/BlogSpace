let fiveItems = [];
const div = document.getElementById("container");

function renderPosts() {
  const displayItems = fiveItems.map(
    (item) =>
      `
        <div class="items">
        <span class="title"><strong>Title:</strong> <b>${item.title}</b></span><br/>
        <span class="body"><strong>Body:</strong> ${item.body}</span>
        <br/>
        <hr />
        </div>
        `
  );
  div.innerHTML = displayItems.join("");
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts", { method: "GET" })
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    fiveItems = data.splice(0, 5);
    renderPosts();
    // console.log(displayItems);
  });

// console.log(div);

let form = document.getElementById("new-post");
let newTitle = document.getElementById("new-title");
let newBody = document.getElementById("new-body");

// console.log(fiveItems);
function handleClick(event) {
  event.preventDefault();
  const dataFromForm = {
    title: newTitle.value,
    body: newBody.value,
  };
  // console.log(dataFromForm);
  fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
    method: "POST",
    body: JSON.stringify(dataFromForm),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      fiveItems.unshift(data);
      // console.log(fiveItems);
      renderPosts();
    });
  newTitle.value = "";
  newBody.value = "";
}

form.addEventListener("submit", handleClick);

// console.log(addTitle);
