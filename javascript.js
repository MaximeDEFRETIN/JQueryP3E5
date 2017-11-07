$(function(){
      //On déterminer la largeur de la fenêtre
      var widthWindow = $(window).width();
      //On détermine la hauteur de la fenêtre
      var heightWindow = $(window).height();
      //Losqu'on appuie sur une touche
      $('#text').keydown(function(e){
        //On détermine la postion horizontal de la div
        var positionSquareX = $('#element').offset().left;
        //On détermine la positon vertical de la div
        var positionSquareY = $('#element').offset().top;
//e.keyCode = valeur d'une touche de clavier
        switch (e.keyCode) {
          case 39://touche droite
          //Si la positon horizontal et plus grand ou égale a la largeur de l'écran
          if(positionSquareX >= (widthWindow-105)){
            //Le carrer a un margin a 0
            $('#element').css('margin-left', '0');
          }else {
            // Sinon le carre gagne 10px en margin left
            $('#element').css('margin-left', '+=10px');
          }
          break;
          case 37://touche gauche
          if(positionSquareX <= 0){
            $('#element').css('margin-left', widthWindow-105);
          }else {
            $('#element').css('margin-left', '-=10px');
          }
          break;
          case 38://touche haut
          //Si la postion Verticale est inférieur ou égale a 0
          if(positionSquareY <= 0){
            //Le carrer auras un margin-top équibalent a la hauteur-125
            $('#element').css('margin-top', heightWindow-125);
            //Sinon margin-top auras +10
          }else {
            $('#element').css('margin-top', '-=10px');
          }
          break;
          case 40://touche bas
          if(positionSquareY >= (heightWindow-105)){
            $('#element').css('margin-top', '0');
          }else {
            $('#element').css('margin-top', '+=10px');
          }
          break;
        }
      });
    });
