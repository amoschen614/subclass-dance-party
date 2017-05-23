window.BalloonDancer = class BalloonDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<img src="./assets/unicornrainbowanimated.gif" id="balloon" class="dancer">');
    let dimension = (140 - Math.random() * 80).toString();
    this.$node.css({ 'width': dimension, 'height': dimension });
    this.setPosition(top, left);
  }  

  step() {
    if ((this.$node.offset().left + this.$node.width()) > $(window).width()) {
      this.$node.remove();
    }
    
    super.step.call(this);
    
    this.$node.animate(Math.random() > 0.5 ? { 'marginTop': '+=20px' } : { 'marginTop': '-=20px' }, this.timeBetweenSteps, 'swing', () =>
      this.$node.animate(Math.random() > 0.6 ? { 'width': '-=20px', 'height': '-=20px' } : { 'width': '+=20px', 'height': '+=20px' }, this.timeBetweenSteps, 'linear', () =>
        this.$node.animate({ 'marginLeft': '+=' + (60 - Math.random() * 10) }, this.timeBetweenSteps)));
  }
};
