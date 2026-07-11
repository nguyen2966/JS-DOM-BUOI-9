import { excercises } from "./exercies.js";

const selectButtons = document.querySelectorAll(".select");
const title = document.querySelector(".exercise-title");
const inputBlock = document.querySelector(".excercise-inputs");
const resultBlock = document.querySelector(".exercise-result");
const contentBlock = document.querySelector(".content");

if (selectButtons) {
  selectButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      clearContent();
      changeButtonIcon(button,index);
      renderContent(index);
    })
  })
}

function changeButtonIcon(button, index){
   const iEle = button.querySelector("i");
   iEle.classList = "fa-solid fa-book-open";

   const lastBtnIndex = localStorage.getItem("lastBtnIndex");

   if(lastBtnIndex && lastBtnIndex != index){
    const lastBtn = selectButtons[lastBtnIndex];
    console.log(lastBtn);
    lastBtn.classList.remove("active");
    lastBtn.classList.add("in-active");
    const iEle = lastBtn.querySelector("i");
    iEle.classList = "fa-solid fa-book";
   }

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
    console.log(title);
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

  const calculateBtn = document.querySelector(".calculate");

  if (calculateBtn) {
    calculateBtn.innerText = exercise.activate;
    calculateBtn.addEventListener("click", () => {
      const inputs = inputBlock.querySelectorAll(":scope > input");
      let res;

      if (index == 0) {
        res = exercise.calculateSalary(inputs[0].value, inputs[1].value);
      }
      else if (index == 1) {
        let inputsArr = [...inputs];
        const values = inputsArr.map(input => input.value);
        console.log(values);
        res = exercise.calculateAverage(values);
      } else if(index == 2){
        res = exercise.calculateCurrency(inputs[0].value);
      } else if(index == 3){
        res = exercise.calculateRectangle(inputs[0].value, inputs[1].value);
      } else if(index == 4){
        res = exercise.calculate2Digits(inputs[0].value);
      }

      const resultBlock = document.querySelector(".exercise-result");
      const resP = resultBlock.querySelector("p");
      resP.innerText = res;
    })
  }
}

