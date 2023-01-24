var x = document.querySelectorAll(".set button").length ;

for ( var i = 0 ; i < x ; i++ ) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

  var buttoninner = this.innerHTML;


  switch (buttoninner) {
    case "GÜLSEN":
        var audio1 = new Audio("gülşen.mp3");
        audio1.play();
        break;
    case "İREMÖ":
        var audio2 = new Audio("iremö.mp3");
        audio2.play();
        break;
    case "BERKBLUE":
        var audio3 = new Audio("berk.mp3");
        audio3.play();
        break;
    case "EYLOSSUM":
        var audio4 = new Audio("eylem.mp3");
        audio4.play();
        break;
    case "YARRO":
        var audio5 = new Audio("sounds/yarro.mp3");
        audio5.play();
        break;
    case "SENOŞ":
        var audio6 = new Audio(".mp3");
        audio6.play();
        break;
    case "RUBBİC":
        var audio7 = new Audio("rubbic.mp3");
        audio7.play();
        break;
    case "ZZ":
        var audio8 = new Audio("zz.mp3");
        audio8.play();
        break;
    case "EMKA":
        var audio9 = new Audio("emka.mp3");
        audio9.play();
        break;

    default:
      console.log(buttoninner);
  }

});
}

document.addEventListener("keydown", function (event) {

  var letter = event.key;
  switch (letter) {
    case "w":
        var audio1 = new Audio("sounds/tom-1.mp3");
        audio1.play();
        break;
    case "a":
        var audio2 = new Audio("sounds/tom-2.mp3");
        audio2.play();
        break;
    case "s":
        var audio3 = new Audio("sounds/tom-3.mp3");
        audio3.play();
        break;
    case "d":
        var audio4 = new Audio("sounds/tom-4.mp3");
        audio4.play();
        break;
    case "j":
        var audio5 = new Audio("sounds/crash.mp3");
        audio5.play();
        break;
    case "k":
        var audio6 = new Audio("sounds/kick-bass.mp3");
        audio6.play();
        break;
    case "l":
        var audio7 = new Audio("sounds/snare.mp3");
        audio7.play();
        break;
    default:
      console.log(buttoninner);
  }
})
