var GrowingDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
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
    height: 30,
    width: 30
  };
  var smallSettings = {
    height: 10,
    width: 10
  };
  
  let enlarge = function() {
    this.$node.animate(largeSettings, this.timeBetweenSteps, 'swing', boundShrink);
  };
  let boundEnlarge = enlarge.bind(this);

  let shrink = function() {
    this.$node.animate(smallSettings, this.timeBetweenSteps, 'swing', boundEnlarge);
  };
  let boundShrink = shrink.bind(this);


  enlarge.call(this);
};
