// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  const boundStep = this.step.bind(this);
  const pause = this.timeBetweenSteps;
  setTimeout(boundStep, pause);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(top) {
  var styleSettings = { 
    top: top,
    left: 300 - this.$node.width()
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.interact = function(dancer) {
  alert('interact');
  this.$node.animate({ top: '+=' + dancer.$node.offset().top - this.$node.offset().top});
};
