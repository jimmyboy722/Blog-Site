const blogContainer = document.getElementById("blogContainer");
const submitBtn = document.getElementById("submitBtn");

// for (let i = 0; i < dataFromLS.length; i++) {
//   const element = dataFromLS[i];

//   const titleDiv = document.createElement("div");
//   titleDiv.innerText = element.title;
//   blogsContainer.append(titleDiv);

//   console.log(element);
//   //   write code to display them
// }

const dataFromLS = JSON.parse(localStorage.getItem("posts"));

if (!dataFromLS) {
  localStorage.setItem("posts", JSON.stringify([]));
}

// on submit of the form

function submitFormData() {
  // collect data from form
  // make sure you build an object with the form data
  const data = {
    title: "test0",
    username: "test username",
    content: "test content",
  };

  const posts = JSON.parse(localStorage.getItem("posts"));

  posts.push(data);

  localStorage.setItem("posts", JSON.stringify(posts));
}

submitBtn.addEventListener("click", submitFormData);
