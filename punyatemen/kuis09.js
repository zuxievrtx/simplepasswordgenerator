$(document).ready(function () {
  // Selector
  $("p").css("background-color", "gray");
  $("button").css("background-color", "blue");

  // Event
  $("button").click(function () {
    $(this).css("background-color", "green");
  });

  // Selector
  $(".box").css("background-color", "gray");
  $(".button").css("background-color", "blue");

  // Event
  $(".button").click(function () {
    $(this).css("background-color", "green");
    $(this)
      .parent()
      .animate(
        {
          opacity: 0,
        },
        1000,
        function () {
          $(this).css("display", "none");
        }
      );
  });
});

// Ajax
$.ajax({
  url: "https://api.example.com/data",
  success: function (data) {
    $("#demo").html(data);
  },
});
