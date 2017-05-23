window.BalloonDancer = class BalloonDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
  }  

  step() {
    super.step.call(this);
    var styleSettings = {
      top: top + 50
    };
    
    this.$node.css(styleSettings);
  }
};
