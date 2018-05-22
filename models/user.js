const SHA256 = require("crypto-js/sha256");

var User = function (userName, _password, donutCoin) {

        this.userName = userName;
        this._password = SHA256(_password).toString(); 
        this.donutCoin = donutCoin;//creates a hash from the user password for 
    
    function coinUpdate(newCoin){
        this.donutcoin = newCoin;
    }
    var  getpassword = function(){
        return this._password;
    }
    return{
        userName: this.userName,
        donutCoin: this.donutCoin,
        _password: undefined,

        getpassword: getpassword()
    }
}

module.exports = User;