// SELECTING THE FORM ELEMENT IN FORM.HTML
const formEl = document.getElementById("blogPosts");
// CREATED FUNCTION TO PREVENT INVALID DATA FROM BEING POSTED TO A BLOG
const formSubmission = function(event)    
event.preventDefault();
    // VARIABLES FOR ITEMS IN FORM.HTML FILE
    const blogs = document.getElementById("content").value.trim();
    const username = document.getElementById("u-name").value.trim();
    const title = document.getElementById("title").value.trim();

// STATE IN WHICH ERROR MESSAGE WOULD OCCOR
    if (!username || !title || !blogs) {
      const errorMessage = document.getElementById("error-message");
      errorMessage.textContent = "Valid Input Needed.";

      return;
    }

 const formData = {
  username: username,
  title: title,
  content: blogs,
 };

 storeLocalStorage(formData);
 redirectPage
// more for receiving and storing data
