// Capture the form inputs
$("#login").on("click", event => {
  event.preventDefault();
  console.log("working");
  window.location = "/TriviaGame";
  // Form validation
});

$("#cash-out").on("click", event => {
  event.preventDefault();
  let coins = $("#donut-coin").html();
  console.log(coins);
  window.location = "/Cashout";


    let donutChain =  new Blockchain; // creates new chain
    console.log(donutChain);
    let trans = new Transaction('TriviaGame', 'User', coins);  // creates some sample transactions
    //let anotherTrans = new Transaction('address2', 'address1', 50);
    donutChain.createTransaction(trans);

    donutChain.minePendingTransactions("my-address");

    $("#winnings").html(donutChain);

});

