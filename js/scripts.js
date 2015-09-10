 var countUp = function(mult,dividend) {

   var numArray = []

   if (mult > dividend) {
     return false;
   } else {
       var mult1 = mult;
       while (mult1 <= dividend){

         numArray.push(mult1);
         mult1 = mult1 + mult;

       }

     return numArray;
   }

};


$(document).ready(function() {
  $("form#count-up").submit(function(event) {
    var mult = parseInt($("input#mult").val())
    var dividend = parseInt($("input#dividend").val())
    var result = countUp(mult,dividend)


    $("#all-numbers").text(result)
    $("#result").show()

    event.preventDefault()
  });
});
