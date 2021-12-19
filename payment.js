var form = document.querySelector("#form");

form.addEventListener("submit", addData);
var arr = JSON.parse(localStorage.getItem("Member")) || [];

function addData(event) {
  event.preventDefault();
  var form = document.querySelector("#form");
  //   var fname = document.getElementById("firstname").value;
  //   var sname = document.getElementById("surname").value;
  //   var output = document.getElementById("output").value;

  // console.log(form.firstname.value);
  var obj = {
    fname: form.firstname.value,
    sname: form.surname.value,
    mob_no: form.output.value,
    country: form.country.value,
  };
  //   console.log(obj);
  arr.push(obj);
  //   console.log(arr);
  arr = JSON.stringify(arr);
  localStorage.setItem("Member", arr);
  displayreceipt(arr);
}
function displayreceipt(arr) {
  document.querySelector("tbody").innerHTML = "";
  arr.map(function (elem) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    var tbody = document.querySelector("tbody");
    tbody.appendChild(tr);
    tr.append(td1, td2, td3);
    td1.textContent = elem.fname;
    td2.textContent = elem.sname;
    td3.textContent = elem.country;
  });
}

function country_code() {
  var countryVal = document.getElementById("country").value;
  var country = document.getElementById("country");
  var outputVal = document.getElementById("output");
  if (countryVal === "Select_Country") {
    document.getElementById("output").value = "";
  } else if (countryVal === "IND" || countryVal === "ind") {
    document.getElementById("output").value = "+91-";
    changes();
  } else if (countryVal === "US" || countryVal === "us") {
    document.getElementById("output").value = "+1-";
    changes();
  } else if (countryVal === "UK" || countryVal === "uk") {
    document.getElementById("output").value = "+55-";
    changes();
  }
  function changes() {
    country.style.color = "#08f";
    outputVal.style.color = "#08f";
    country.style.border = "black";
  }
}
// console.log(form.firstname.value);
function showindow() {
  alert(
    "If you change or cancel your booking you will not get a refund or credit to use for a future stay. This policy will apply regardless of COVID-19, subject to any local consumer laws."
  );
}
function show_month() {
  console.log(document.getElementById("expMonth").value);
}

function show_year() {
  console.log(document.getElementById("expYear").value);
}

// document.getElementById("booking_done").addEventListner("click" function(){

// })
function clickcomplete() {
  window.location.href = "receipt.html";
}
function goHome() {
  window.location.href = "home.html";
}
