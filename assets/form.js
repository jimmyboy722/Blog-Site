// SELECTING THE FORM ELEMENT IN FORM.HTML
const formEl = document.getElementById("blogPosts");
// CREATED FUNCTION EXPRESSION TO PREVENT INVALID DATA FROM BEING POSTED TO A BLOG
const formSubmission = function (event) {
  event.preventDefault();
  // VARIABLES FOR ITEMS IN FORM/HTML FILE
  const blogs = document.getElementById("content").value.trim();
  const username = document.getElementById("u-name").value.trim();
  const title = document.getElementById("title").value.trim();

  // STATE IN WHICH ERROR MESSAGE WOULD OCCuR
  if (![username, blogs, title].every(Boolean)) {
    const errorMessage = document.querySelector("#error-message");
    errorMessage.textContent = "Valid Input Needed!";
    // SET  2 SECOND TIME BEFORE REMOVING ERROR MESSAGE
    setTimeout(function () {
      errorMessage.textContent = "";
    }, 2000);
    return;
  }

  //OBJECT FROM BLOG FORM DATA
  const formInfo = {
    username: username,
    title: title,
    content: blogs,
  };

  //CALLING FUNCTIONS FOR SAVING BLOG SUBMISSIONS THEN SWITCHING TO SECOND WEBPAGE

  storeFormData(formInfo);
  toBlogPage();
};

//FUNCTION EXPRESSION TO ADD FORM DATA TO LOCAL STORAGE AND ADD BLOG SUBMIS TO ARRAY
const storeFormData = function (data) {
  const blogSubmits = addToLocalStorage;
  blogSubmits.push(data);
  const stringData = JSON.stringify(blogSubmits);
  localStorage.set("blogs", stringData);
};

//CALLING FOR THE SUBMISSION OF THE BLOG FORM ON CLICK OF SUBMIT BUTTON
formEl.addEventListener("submit", formSubmission);
