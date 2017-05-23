var GrowingDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="./assets/ditto.png" alt="ditto" id="twinkle" class="dancer">');
  this.setPosition(top, left);
};

GrowingDancer.prototype = Object.create(Dancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;

GrowingDancer.prototype.step = function() {
// toggle() is a jQuery method to show/hide the <span> tag.
// See http://api.jquery.com/category/effects/ for this and
// other effects you can use on a jQuery-wrapped html tag.
//  super.step();
  // this.oldStep.call(this);

  var largeSettings = {
    height: 80,
    width: 80
  };
  var smallSettings = {
    height: 60,
    width: 60
  };
  
  let time = this.timeBetweenSteps < 100 ? this.timeBetweenSteps * 10 : this.timeBetweenSteps;
  let enlarge = function() {
    this.$node.animate(largeSettings, time, 'swing', boundShrink);
  };
  let boundEnlarge = enlarge.bind(this);

  let shrink = function() {
    this.$node.animate(smallSettings, time, 'swing', boundEnlarge);
  };
  let boundShrink = shrink.bind(this);


  enlarge.call(this);
};
