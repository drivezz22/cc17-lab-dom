const province = ["BKK", "Chaigmai", "Rayong"];
const district = {
  BKK: ["BKK1", "BKK2", "BKK3"],
  Chaigmai: ["Chaigmai1", "Chaigmai2", "Chaigmai3"],
  Rayong: ["Rayong1", "Rayong2", "Rayong3"],
};

const provinceEl = document.getElementById("province");
const districtEl = document.getElementById("district");

province.forEach((p) => {
  let optionP = document.createElement("option");
  optionP.textContent = p;
  optionP.setAttribute("value", p);
  provinceEl.append(optionP);
});

provinceEl.addEventListener("click", addDistrict);

function createDistrict() {
  let districtArray = district[provinceEl.value];
  districtArray.forEach((d) => {
    let optionD = document.createElement("option");
    optionD.textContent = d;
    optionD.setAttribute("value", d);
    districtEl.append(optionD);
  });
  districtEl.removeEventListener("click", createDistrict);
}

function addDistrict() {
  districtEl.innerHTML = "<option vdisabled selected>select</option>";
  districtEl.addEventListener("click", createDistrict);
}
