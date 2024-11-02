document.addEventListener("DOMContentLoaded", () => {
  let selectedOption = localStorage.getItem("selectedOption");
  console.log(selectedOption);

  if (selectedOption === "2024-121") {
    document.getElementById(
      "selectedOptionDisplay"
    ).textContent = `Selected Option: ${selectedOption}`;
    document.getElementById("SupplierRecInsp-edit").checked = true;
    document.getElementById("sName-edit").value = "beer-store";
    document.getElementById("NCRNo-edit").value = selectedOption;
    document.getElementById("DescriptionItem-edit").value =
      "Beer with no alcohol, SAP=444";
    document.getElementById("DescriptionDefect-edit").value =
      "5 bottles broken";
    document.getElementById("ProdNo-edit").value = "112233";
    document.getElementById("SalesOrder-edit").value = "12345";
    document.getElementById("QuantityRec-edit").value = "200";
    document.getElementById("QuantityDef-edit").value = "5";
    document.getElementById("Yes-edit").checked = true;
    document.getElementById("currentDate-edit").textContent = "2024-10-01";
  } else if (selectedOption === "2024-125") {
    document.getElementById(
      "selectedOptionDisplay"
    ).textContent = `Selected Option: ${selectedOption}`;
    document.getElementById("SupplierRecInsp-edit").checked = false;
    document.getElementById("WIP-edit").checked = true;
    document.getElementById("sName-edit").value = "LCBO";
    document.getElementById("NCRNo-edit").value = selectedOption;
    document.getElementById("DescriptionItem-edit").value =
      "Cold quality beer made in Ontario, SAP=555";
    document.getElementById("DescriptionDefect-edit").value =
      "3 bottles damaged";
    document.getElementById("ProdNo-edit").value = "445566";
    document.getElementById("SalesOrder-edit").value = "67890";
    document.getElementById("QuantityRec-edit").value = "150";
    document.getElementById("QuantityDef-edit").value = "3";
    document.getElementById("No-edit").checked = true;
    document.getElementById("currentDate-edit").textContent = "2024-10-15";
  } else if (selectedOption === "2024-109") {
    document.getElementById(
      "selectedOptionDisplay"
    ).textContent = `Selected Option: ${selectedOption}`;
    document.getElementById("SupplierRecInsp-edit").checked = true;
    document.getElementById("sName-edit").value = "Circle-K";
    document.getElementById("NCRNo-edit").value = selectedOption;
    document.getElementById("DescriptionItem-edit").value =
      "New trending beer, SAP=666";
    document.getElementById("DescriptionDefect-edit").value =
      "1 bottle missing";
    document.getElementById("ProdNo-edit").value = "987654";
    document.getElementById("SalesOrder-edit").value = "54321";
    document.getElementById("QuantityRec-edit").value = "100";
    document.getElementById("QuantityDef-edit").value = "1";
    document.getElementById("Yes-edit").checked = true;
    document.getElementById("currentDate-edit").textContent = "2024-09-01";
  }

  function saveEdits() {
    let editedData = {
      selectedOption: selectedOption,
      SupplierRecInsp: document.getElementById("SupplierRecInsp-edit").checked,
      WIP: document.getElementById("WIP-edit").checked,
      sName: document.getElementById("sName-edit").value,
      NCRNo: document.getElementById("NCRNo-edit").value,
      DescriptionItem: document.getElementById("DescriptionItem-edit").value,
      DescriptionDefect: document.getElementById("DescriptionDefect-edit")
        .value,
      ProdNo: document.getElementById("ProdNo-edit").value,
      SalesOrder: document.getElementById("SalesOrder-edit").value,
      QuantityRec: document.getElementById("QuantityRec-edit").value,
      QuantityDef: document.getElementById("QuantityDef-edit").value,
      Yes: document.getElementById("Yes-edit").checked,
      No: document.getElementById("No-edit").checked,
      currentDate: document.getElementById("currentDate-edit").textContent,
    };

    localStorage.setItem(
      `editedData-${selectedOption}`,
      JSON.stringify(editedData)
    );
    goToSaveAndExitPage();
  }

  document.querySelector(".button_save").onclick = saveEdits;

  let savedEdits = localStorage.getItem(`editedData-${selectedOption}`);
  if (savedEdits) {
    let data = JSON.parse(savedEdits);
    document.getElementById("SupplierRecInsp-edit").checked =
      data.SupplierRecInsp;
    document.getElementById("WIP-edit").checked = data.WIP;
    document.getElementById("sName-edit").value = data.sName;
    document.getElementById("NCRNo-edit").value = data.NCRNo;
    document.getElementById("DescriptionItem-edit").value =
      data.DescriptionItem;
    document.getElementById("DescriptionDefect-edit").value =
      data.DescriptionDefect;
    document.getElementById("ProdNo-edit").value = data.ProdNo;
    document.getElementById("SalesOrder-edit").value = data.SalesOrder;
    document.getElementById("QuantityRec-edit").value = data.QuantityRec;
    document.getElementById("QuantityDef-edit").value = data.QuantityDef;
    document.getElementById("Yes-edit").checked = data.Yes;
    document.getElementById("No-edit").checked = data.No;
    document.getElementById("currentDate-edit").textContent = data.currentDate;
  }
});
