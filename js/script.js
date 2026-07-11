import { excercises } from "./exercies.js";

const selectButtons = document.querySelectorAll(".select");
const title = document.querySelector(".exercise-title");
const inputBlock = document.querySelector(".excercise-inputs");
const resultBlock = document.querySelector(".exercise-result");
const calculateBtn = document.querySelector(".calculate");
let currentExerciseIndex = 0;

if (selectButtons.length) {
  selectButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      selectExercise(index);
    });
  });

  const savedIndex = Number(localStorage.getItem("lastBtnIndex"));
  const initialIndex = Number.isInteger(savedIndex) && savedIndex >= 0 && savedIndex < excercises.length
    ? savedIndex
    : 0;

  selectExercise(initialIndex);
}

if (calculateBtn) {
  calculateBtn.addEventListener("click", calculateResult);
}

function selectExercise(index) {
  currentExerciseIndex = index;
  clearContent();
  changeButtonIcon(index);
  renderContent(index);
}

function changeButtonIcon(index){
  selectButtons.forEach((button, buttonIndex) => {
    const isActive = buttonIndex === index;
    button.classList.toggle("active", isActive);
    button.querySelector("i").className = isActive
      ? "fa-solid fa-book-open"
      : "fa-solid fa-book";
  });

  localStorage.setItem("lastBtnIndex", index);
}

function clearContent() {
  inputBlock.innerHTML = "";
  const resP = resultBlock.querySelector("p");
  if(resP){
    resP.innerText = "";
  }
}

function renderContent(index) {
  const exercise = excercises[index];

  if (title) {
    const titleP = title.querySelector(".title");
    titleP.innerText = exercise.title;
    
    const titleIcon = title.querySelector(".icon");
    titleIcon.innerText = exercise.icon;
  }

  exercise.inputs.forEach((input, i) => {
    const inputForm = document.createElement("input");
    inputForm.type = "number";
    inputForm.id = `input-${i}`;
    inputForm.placeholder = input;
    inputBlock.appendChild(inputForm);
  });

  if (calculateBtn) {
    calculateBtn.innerText = exercise.activate;
  }
}

function calculateResult() {
  const exercise = excercises[currentExerciseIndex];
  const values = [...inputBlock.querySelectorAll(":scope > input")]
    .map(input => input.value);
  let result;

  if (currentExerciseIndex === 0) {
    result = exercise.calculateSalary(values[0], values[1]);
  } else if (currentExerciseIndex === 1) {
    result = exercise.calculateAverage(values);
  } else if (currentExerciseIndex === 2) {
    result = exercise.calculateCurrency(values[0]);
  } else if (currentExerciseIndex === 3) {
    result = exercise.calculateRectangle(values[0], values[1]);
  } else if (currentExerciseIndex === 4) {
    result = exercise.calculate2Digits(values[0]);
  }

  resultBlock.querySelector("p").innerText = result;
}

