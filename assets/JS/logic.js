const modeBtn = document.querySelector("#switch");

const switchModes = function (mode) {
  let icon;

  if (mode === "light") {
    icon = "&#127774";
  } else {
    icon = "&#127770";
  }

  modeBtn.textContent = icon;

  document.body.classList = mode;
};

const handleModeToggle = function () {
  127770;
  const mode = readMode();

  let nextMode;

  if (mode === "light") {
    nextMode = "dark";
  } else {
    nextMode = "light";
  }

  applyMode(nextMode);

  saveMode(nextMode);
};

const readLocalStorage = function () {
  const stringData = localStorage.getItem("blogs");

  const data = JSON.parse(stringData);

  return data || [];
};

const readMode = function () {
  const mode = localStorage.getItem("mode") || "dark";

  return mode;
};

const saveMode = function (mode) {
  localStorage.setItem("mode", mode);
};

applyMode(readMode());

modeBtnEl.addEventListener("click", handleModeToggle);
