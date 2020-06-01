var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);


$('#'+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);

}
$('.btn').on('click', function() {
var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  console.log(userClickedPattern);
});

function playSound(name){
  var audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

function animatePress(currentColor){
  $('#'+currentColor).addClass('pressed');

  setTimeout(function() {
      $('#'+currentColor).removeClass('pressed');
  }, 100);
}
