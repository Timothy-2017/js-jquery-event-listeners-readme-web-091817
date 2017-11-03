//define functions here

function getIt() {
  $('p').on("click", function() {
    //action you want taken
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on("load", function() {
    //action you want taken
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('#typing').on("keydown", function(e) {
    //action you want taken
    if (e.which === 71){
      alert("You pressed 'g'!");
  }
  });
}

function submitIt() {
  $('form').on('submit', function(e) {
    //action you want taken
    alert('Your form is going to be submitted now.');
  });
}

$(document).ready(function(){
// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
