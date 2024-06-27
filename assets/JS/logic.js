const addToLocalStorage = function () {
  const stringValue = localStorage.getItem("posts");
  const value = JSON.parse(stringValue); //to make sure values are accepted

  //TO ENSURE FUNCTION RETURNS DATA IF TRUTHY AND AN EMPTY ARRAY IF NOT
  return data || [];
};
