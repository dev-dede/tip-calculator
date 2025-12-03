const billAMount = document.getElementById("billAmount");
const customTipAmount = document.getElementById("customerTipAmount");
const splitCount = document.getElementById("splitCount");

const totalAmount = document.getElementById("totalAmount");
const tipAmount = document.getElementById("tipAmount");
const amountperHead = document.getElementById("amountPerPerson");

function reset() {
  billAMount.value = "";
  customTipAmount.value = "";
  splitCount.value = "";
}

function submit() {
  const bill = parseFloat(billAMount.value);
  const tip = parseFloat(customTipAmount.value);
  const split = splitCount.value;

  if (!bill || !tip || !split) {
    alert("some field are empty");
  } else {
    const totalBill = parseFloat(bill + tip);
    const amountperperson = parseFloat(totalBill / split);

    totalAmount.innerText = `The total amoount is : ${totalBill}`;
    tipAmount.innerText = `Your tip amount is: ${tip}`;
    amountperHead.innerHTML = `Each person pays: ${amountperperson}`;
  }

  reset();
}

function toggleDivisibility() {
  const serviceRatingRadioButton = document.getElementById("serviceRating");
  const serviceRatingInputDiv = document.getElementById("serviceRatingInput");

  if (serviceRatingRadioButton.checked) {
    serviceRatingInputDiv.style.display = "block";
  } else {
    serviceRatingInputDiv.style.display = "none";
  }
}

const customTip = document.getElementById("customTip");
const serviceRating = document.getElementById("serviceRating");

const customInput = document.getElementById("customerTipInput");
const ratingInput = document.getElementById("serviceRatingInput");

customTip.addEventListener("change", function () {
  customInput.style.display = "block";
  ratingInput.style.display = "none";
});

serviceRating.addEventListener("change", function () {
  customInput.style.display = "none";
  ratingInput.style.display = "block";
});
