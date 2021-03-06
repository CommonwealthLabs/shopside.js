//letters.js Angular App
'use strict';

angular.module('letterApp',[])
  .controller('letterController', [ '$scope', function (){
    var letter = this;
    var selectedWard;
    // Info to pass to server
    letter.info = {
      firstName: "",
      lastName: "",
      email: "",
      settings: [],
      address: "",
      city: "Brampton",
      province: "ON",
      postalCode: "",
      ward: "1"
    }


    letter.wardList = {
      "1" : ["1n5", "1 & 5"],
      "2" : ["2n6", "2 & 6"],
      "3" : ["3n4", "3 & 4"],
      "4" : ["3n4", "3 & 4"],
      "5" : ["1n5", "1 & 5"],
      "6" : ["2n6", "2 & 6"],
      "7" : ["7n8", "7 & 8"],
      "8" : ["7n8", "7 & 8"],
      "9" : ["9n10", "9 & 10"],
      "10" : ["9n10", "9 & 10"]
    }


    letter.councillors = {
      "1n5" : {
        regional: { name: "Elaine Moore", email: "email@email.com", phone: "416-970-8902" },
        city: { name: "Grant Gibson", email: "email@email.com", phone: "416-970-8902" }
      },
      "2n6" : {
        regional: { name: "Michael Palleschi", email: "email@email.com", phone: "905-495-5559"},
        city:   { name: "Doug Whillans", email: "email@gmail.com", phone: "905-416-8989"}
      }
    }

    letter.setWard = function (wardChosen) {
      letter.info.ward = wardChosen.toString();
      selectedWard = letter.wardList[letter.info.ward][0];
    }
    letter.saveUser = function (fName, lName, email) {
      letter.info.firstName = fName;
      letter.info.lastName = lName;
      letter.info.email = email;
    }

  }]);
