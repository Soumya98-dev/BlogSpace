const div = document.getElementById("container");
fetch("https://apis.scrimba.com/jsonplaceholder/posts", { method: "GET" })
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    const fiveItems = data.splice(0, 5);
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
    // console.log(displayItems);
  });

// console.log(div);
