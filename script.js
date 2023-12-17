function convertDate() {
  var inputDate = document.getElementById("inputDate").value;
  var apiUrl =
    "https://www.hebcal.com/converter?cfg=json&date=" +
    inputDate +
    "&g2h=1&strict=1";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      var hebrewDate = data.hebrew;
      document.getElementById("result").innerText =
        "התאריך העברי הוא: " + hebrewDate;
    })
    .catch((error) => {
      document.getElementById("result").innerText = "אירעה שגיאה בהמרת התאריך.";
    });
}
