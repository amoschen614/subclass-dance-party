$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  
  $('.lineUpButton').on('click', function(event) {
    let top = 50;
    for (let i = 0; i < window.dancers.length; i++) {       
      window.dancers[i].lineUp(top + i * 50);
    }
  });

  $('.interactButton').on('click', function(event) {
    for (let j = 0; j < 10; j++) {
      for (let i = 0; i < window.dancers.length; i++) {
        var $dancer = window.dancers[i].$node;
        var $partner = window.dancers[(i + 1) % window.dancers.length].$node;

        var $leftPartner = $dancer.offset().left < $partner.offset().left ? $dancer : $partner;
        var $topPartner = $dancer.offset().top < $partner.offset().top ? $dancer : $partner; 
        var $rightPartner = $dancer.offset().left > $partner.offset().left ? $dancer : $partner;
        var $bottomPartner = $dancer.offset().top > $partner.offset().top ? $dancer : $partner; 


        $leftPartner.animate({ left: '+=' + (($partner.offset().left + $dancer.offset().left) / 100)}, 10);
        $rightPartner.animate({ left: '-=' + (($partner.offset().left + $dancer.offset().left) / 100)}, 10);
        $topPartner.animate({ top: '+=' + (($partner.offset().top + $dancer.offset().top) / 100)}, 10);
        $bottomPartner.animate({ top: '-=' + (($partner.offset().top + $dancer.offset().top) / 100)}, 10);
      }
    }
  });

  $('body').on('click', '#balloon', function(event) {
    var $dancer = $(this);
    $dancer.attr('src', './assets/dead.png');
  });
});

