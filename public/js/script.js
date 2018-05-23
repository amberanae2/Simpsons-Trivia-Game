// Capture the form inputs
$("#login").on("click", event => {
  event.preventDefault();
  console.log("working");
  window.location = "/TriviaGame";
  // Form validation
});

$("#cash-out").on("click", event => {
  event.preventDefault();
  window.location = "/Cashout";
});
