let supplier = document.getElementById("sName");
let ncrNo = document.getElementById("NCRNo");
let descItem = document.getElementById("DescriptionItem");
let a = 100;
let currentDateElement = document.getElementById("currentDate");
let openNcr = document.getElementById("openNcr");
console.log(openNcr);
function updateCurrentDate() {
  let today = new Date();
  let options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let formattedDate = today.toLocaleDateString(options);
  currentDateElement.textContent = formattedDate;
}

updateCurrentDate();

supplier.addEventListener("change", () => {
  let selectedValue = supplier.value;
  console.log("Selected value:", selectedValue);
  if (selectedValue == "sabre") {
    a += 1;
    let output = "2024-" + a;
    ncrNo.innerHTML = output;
    descItem.textContent = "Cheap black, blue printer, SAP=222";
  } else if (selectedValue == "whitePages") {
    a += 1;
    let output = "2024-" + a;
    ncrNo.innerHTML = output;
    descItem.textContent = "100 reams of pale pages, SAP=111";
  } else {
    a += 1;
    let output = "2024-" + a;
    ncrNo.innerHTML = output;
    descItem.textContent = "Chocolate muffin, SAP=333";
  }
});

supplier.addEventListener("focus", () => {
  let firstOption = supplier.options[0];
  if (firstOption.value === "") {
    firstOption.style.display = "none";
  }
});
