//VARIABLE FOR CONTAINER FOR BLOG POSTS
const mainSec = document.getElementById("blogContainer");

// FUNCTION EXPRESSION THAT CREATES AND ADDS NEW ELEMENTS TO THE DOM AND ALSO SETS THE TEXT CONTENT
const makePosts = function (text, type, parent) {
  const tag = document.createElement(type);
  tag.textContent = text;
  parent.appendChild(tag);

  return tag;
};

// FOR WHEN THERE ARE NO POSTS TO DISPLAY, CREATION OF ELEMENT TO SAY SO AND ANCHOR TO MAKE BLOG POST
const noPosts = function () {
  makePosts("h2", "Coming Soon...Blogs!", mainSec);
  const a = makePosts("a", "Post your blog here!", mainSec);

  a.href = "http://127.0.0.1:5501/form.html";
};
// FUNCTION EXPRESSION TO GET THE DATA FROM LOCAL STORAGE AND ASSIGN TO THE VARIABLE "BLOGS"
const createBlogList = function () {
  const posts = addToLocalStorage();
  // CHECKS IF "BLOGS" ARRAY IS EMPTY AND IF SO, "HANDLE-EMPTY" FUNCTION EXITS
  if (!blogs.length) {
    noPosts();

    //RETURN USED TO END FUNCTION
    return;
  }

  // FOR OF LOOP FOR ARRAY OF OBJECTS(BLOGS)
  for (let blog of blogs) {
    const article = makePosts("article", null, mainSec);

    //CALLING THE MAKE POST FUNCTIONS WITH DIFFERENT ARGUMENTS TO CREATE ELEMENTS FOR CARDS
    makePosts("h2", blog.title, article);
    makePosts("blockquote", blog.content, article);
    makePosts("p", `Posted by: ${blog.username}`, article);

    article.classList.add("card");
  }
};

// RUNNING THE PREVIOUSLY MADE FUNCTION
createBlogList();
