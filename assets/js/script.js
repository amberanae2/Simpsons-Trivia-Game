$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  });


// BELOW IS EXAMPLE CODE IM GOING TO USE TO SEND BACK 
// FOR VALIDATION
  //=========================================
  // Capture the form inputs
  $("#submit").on("click", function(event) {
    event.preventDefault();

    // Form validation
    function validateForm() {
      var isValid = true;
      $(".form-control").each(function() {
        if ($(this).val() === "") {
          isValid = false;
        }
      });

      $(".chosen-select").each(function() {

        if ($(this).val() === "") {
          isValid = false;
        }
      });
      return isValid;
    }

    // If all required fields are filled
    if (validateForm()) {
      // Create an object for the user"s data
      var userData = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
          $("#q1").val(),
          $("#q2").val(),
          $("#q3").val(),
          $("#q4").val(),
          $("#q5").val(),
          $("#q6").val(),
          $("#q7").val(),
          $("#q8").val(),
          $("#q9").val(),
          $("#q10").val()
        ]
      };

      // AJAX post the data to the friends API.
      $.post("/api/friends", userData, function(data) {

        // Grab the result from the AJAX post so that the best match's name and photo are displayed.
        $("#match-name").text(data.name);
        $("#match-img").attr("src", data.photo);

        // Show the modal with the best match
        $("#results-modal").modal("toggle");

      });
    } else {
      alert("Please fill out all fields before submitting!");
    }
  });


//   const SHA256 = require("crypto-js/sha256");

// var User = function (userName, _password, donutCoin) {

//         this.userName = userName;
//         this._password = SHA256(_password).toString(); 
//         this.donutCoin = donutCoin;//creates a hash from the user password for 
    
//     function coinUpdate(newCoin){
//         this.donutcoin = newCoin;
//     }
//     var  getpassword = function(){
//         return this._password;
//     }
//     return{
//         userName: this.userName,
//         donutCoin: this.donutCoin,
//         _password: undefined,

//         getpassword: getpassword()
//     }
// }

// module.exports = User;