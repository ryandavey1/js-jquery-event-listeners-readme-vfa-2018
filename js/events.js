//define functions here
function getIt(){
  console.log('paragraph');
  $('p').on("click", function(){
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt(){
  console.log('press');
  $('input').on('keydown', function(key) {
        if(key.which == 71){
          alert('g was pressed');
        }
  });
}

function submitIt(){
  console.log('submitted');
  $("form").on("submit", function() {
    alert('your form is going to be submitted now');
});
}

$(document).ready(function(){
// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});







function pressIt() {
  $('#typing').on('keydown', function(e) {
    // 'g' corresponds to 71
    if (e.which === 71) {
      alert("You pressed 'g'!")
    }
  })
}

function submitIt() {
  $('form').on('submit', function(e) {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

// call functions here

});
