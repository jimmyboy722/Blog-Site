const mainSec = document.getElementById("blogContainer");

// THE FOLLOWING REUSABLE FUNCTION CREATES AND ADDS NEW ELEMENTS TO THE DOM AND ALSO SETS THE TEXT CONTENT
const makePosts = function (text, type, parent) {
  const tag = document.createElement(type);
  tag.textContent = text;
  parent.appendChild(tag);

  return tag;
};

// FOR WHEN THERE ARE NO POSTS TO DISPLAY, CREATION OF ELEMENT TO SAY SO AND ANCHOR TO MAKE BLOG POST
const noPosts = function () {
  buildElement("h2", "No Blog posts yet...", mainSec);
  const a = buildElement("a", "Post your blog here!", mainSec);

  a.href = "";
};
// FUNCTION MADE TO GET THE DATA FROM LOCAL STORAGE AND ASSIGN TO THE VARIABLE "BLOGS"
const createBlogList = function () {
  const blogs = readLocalStorage();
  // CHECKS IF "BLOGS" ARRAY IS EMPTY AND IF SO, "HANDLE-EMPTY" FUNCTION EXITS
  if (!blogs.length) {
    noPosts();

    //RETURN USED TO END FUNCTION
    return;
  }

  // FOR OF LOOP FOR ARRAY OF OBJECTS(BLOGS)
  for (let blog of blogs) {
    const article = createBlogList("article", null, mainSec);

    buildElement("h2", blog.title, article);
    buildElement("blockquote", blog.content, article);
    buildElement("p", `Posted by: ${blog.username}`, article);

    article.classList.add("card");
  }
};

// RUNNING THE PREVIOUSLY MADE FUNCTION
createBlogList();
