var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

$('html').on('click',function(){
  if(!started){
    $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
}

});

function nextSequence(){
  level++;
  $('#level-title').text('level '+level);
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
  checkAnswer(userClickedPattern.length-1);
  if(userClickedPattern === gamePattern){

    setTimeout(nextSequence(), 1000);
    userClickedPattern = [];
  }
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


function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {



       //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
       if (userClickedPattern.length === gamePattern.length){

         //5. Call nextSequence() after a 1000 millisecond delay.
         setTimeout(function () {
           nextSequence();
         }, 1000);
          userClickedPattern = [];
       }

     } else {

       playSound('wrong');
       $('body').addClass('game-over');
        $("#level-title").text('Game Over, Press Any Key to Restart');

       setTimeout(function() {
           $('body').removeClass('game-over');
       }, 200);




       setTimeout(function() {
           startOver();
       }, 200);


     }
}


function startOver(){
  level = 0;
  started = false;
  gamePattern = [];
  userClickedPattern = [];
}
