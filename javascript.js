//keep track of the question number
var qNumber = 0;
// get the start class 
const startAQuestion = document.getElementById("start");
//get form html
const formRadio = document.querySelector('#form');
// console.log(formRadio, " form?");

//
function getSelectedRadio() {
  const selections = document.getElementsByName('checkboxes');
  console.log("selec ", selections);
  // let isChecked;
  for (var checkedButton of selections) {
    if (checkedButton.checked) {
      // isChecked = checkedButton.value;
      console.log(`selected radio: ${checkedButton.value}`);
    }
  };
};

//increment score/points, question, and keep toggle on show




//start game function
const startGame = () => {
  console.log("game on!");
  //display form question and radio buttons to submit
  formRadio.classList.toggle("show");
  //on click get selected radio:
  document.getElementsByClassName('submit').addEventListener('click', ()=>{
    getSelectedRadio();
  });

  //put a question onto the screen (from an array of Qs)
  var qs = "First question here";
  
  //increment the question number by 1
  qNumber++;
  document.querySelector("#question-number").innerHTML = qNumber;

  //set the html to the question
  document.querySelector(".question").innerHTML = qs;


};

startAQuestion.addEventListener("click", startGame);
