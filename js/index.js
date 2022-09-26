const billInp = document.getElementById("bill");
const numPeaple = document.getElementById("nPeaple");
const custm = document.getElementById("cust");
const resetbtn = document.getElementById("resetbtn");
const errors = document.querySelectorAll("#error");
const tipAmount = document.getElementById("tipAmount");
const totalAmount = document.getElementById("totalAmount");
const btnTip = document.getElementById("tip");

let tip = 0;
let bill = 0;
let NumberOfPeople = 0;

// a function to change the style
function borderChangeColor(name, styleB, styleT) {
  name.style.border = styleB;
  name.style.transition = styleT;
}

// a function to show the error style
function errorStyling(name, styleName) {
  name.classList.remove("trans");
  borderChangeColor(styleName, "2px solid red", "all ease-in-out .08s");
}

// This function shows the errors according to what input the user type
function error() {
  const bill = billInp.value;
  const numP = numPeaple.value;

  function showError(numi, inputcompare, inputtype) {
    for (let i = 0; i < errors.length; i++) {
      if (i == numi && inputcompare == 0 && !(inputcompare == "")) {
        errorStyling(errors[i], inputtype);
      }
    }

    for (let i = 0; i < errors.length; i++) {
      if (i == numi && inputcompare >= 1) {
        errors[i].classList.add("trans");
        borderChangeColor(inputtype, "", "all ease-in-out .08s");
      }
    }
  }

  billInp.addEventListener("click", showError(0, bill, billInp));
  numPeaple.addEventListener("click", showError(1, numP, numPeaple));
}

// A function for knowing the amount of the button clicked
function knowTip(tipAmount) {
  tip = tipAmount;
  this.style.backgroundColor = "rgb(182, 234, 234)";
  this.style.color = "hsl(183, 100%, 15%)";
}

function customKnowInput() {
  tip = custm.value;
}

function knowInput() {
  if (!(bill == 0 && bill != "") || !(numP == 0 && numP != "")) {
    bill = Number(billInp.value);
    NumberOfPeople = Number(numPeaple.value);

    autoCalc();
  }
}

function onClick(el) {
  el.style.backgroundColor = "rgb(182, 234, 234)";
  el.style.color = "hsl(183, 100%, 15%)";
}

function autoCalc() {
  if (bill > 0 && NumberOfPeople > 0 && tip > 0) {
    const totalTipAmount = (bill * tip) / NumberOfPeople;
    const totalPerPearson = bill / NumberOfPeople + totalTipAmount;

    tipAmount.innerText = `$${Number(totalTipAmount).toFixed(2)}`;
    totalAmount.innerText = `$${Number(totalPerPearson).toFixed(2)}`;
  }
}

resetbtn.addEventListener("click", () => {
  billInp.value = "";
  numPeaple.value = "";
  custm.value = "";
  tip = 0;
  bill = 0;
  NumberOfPeople = 0;
  tipAmount.innerText = `$0.00`;
  totalAmount.innerText = `$0.00`;
  btnTip.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip.style.color = "White";
});
