$('#element').css('width','50px').css('height','50px').css('background','red');
var x = 0;
var y = 0;

//keyup() -> execute la fonction lorsqu'une touche a été pressé puis relaché
$('#texte').keyup(function(e) {

  //e.keyCode -> renvoie le numéro de la touche préssée
  var key = e.keyCode;
  //window -> correspond à la fenêtre du navigateur.
  //Si window est mis dans des simples cotes, c'est alors considéré comme un problème et le script s'arrête.
  var width = $(window).width();
  var height = $(window).height();

  if (key == 37) {
    y = y - 10;
    //On donne les instructions en fonction de la position du carré dans l'écran
    if(y < 0){
      y = width - 50;
      $('#element').css('margin-left', y);
    }
    else if (y >= 0) {
      y = y - 10;
      $('#element').css('margin-left', y);
    }
  }
  else if (key == 38) {
    x = x - 10;
    if (x < 0) {
      //-90 correspond à la taille du carré
      x = height - 90;
      $('#element').css('margin-top', x);
    }
    else if (x >= 0) {
      x = x - 10;
      $('#element').css('margin-top', x);
    }
  }
  else if (key == 39) {
    y = + 10;
    if (width - 50 > y) {
      $('#element').css('margin-top', y);
    }
    else if (width - 50 <= y) {
      y = 0;
      $('#carre').css('margin-left', y);
    }
  }
  else if (key == 40) {
    x = x + 10;
    if (width - 50 > x) {
      $('#element').css('margin-top', x);
    }
    else if (width - 50 <= x) {
      x = 0;
      $('#element').css('margin-left', x);
    }
  }
});
