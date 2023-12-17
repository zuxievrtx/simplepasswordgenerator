// FUNGSI SLIDER
const slider = document.querySelector(".range__slider");
const sliderValue = document.querySelector(".length__title");

slider.querySelector("input").addEventListener("input", (event) => {
  sliderValue.setAttribute("data-length", event.target.value);
  applyFill(event.target);
});

$(document).ready(function () {
  //   FUNGSI MAIN UNTUK GENERATE PASSWORD MENGGUNAKAN API
  function generatePassword() {
    var length = $("#slider").val();
    var includeNumbers = $("#number").is(":checked");
    var includeSymbols = $("#symbol").is(":checked");
    var excludeNumbers = $("#excludeNumbers").is(":checked");
    var excludeSymbols = $("#excludeSymbols").is(":checked");

    var apiUrl =
      "https://api.api-ninjas.com/v1/passwordgenerator?length=" +
      length +
      "&numbers=" +
      includeNumbers +
      "&symbols=" +
      includeSymbols +
      "&exclude_numbers=" +
      excludeNumbers +
      "&exclude_special_chars=" +
      excludeSymbols;

    $.ajax({
      method: "GET",
      url: apiUrl,
      headers: { "X-Api-Key": "pdptwRJ6vTeYYDnSlZwrug==cBGIF1zi90VyDs7d" },
      contentType: "application/json",
      success: function (result) {
        $("#result").text(result.random_password);
      },
      error: function ajaxError(jqXHR) {
        console.error("Error: ", jqXHR.responseText);
      },
    });
  }

  //   FUNGSI UNTUK MEMBUAT COPY PASSWORD NYA
  function copyToClipboard() {
    var textArea = document.createElement("textarea");
    textArea.value = $("#result").text();
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    document.body.removeChild(textArea);

    $(".result__info.left").fadeIn("fast").delay(1000).fadeOut("fast");
  }

  // Event listener for the generate button
  $("#generate").on("click", function () {
    generatePassword();
  });

  // Event listener for the copy button
  $("#copy-btn").on("click", function () {
    copyToClipboard();
  });
});
