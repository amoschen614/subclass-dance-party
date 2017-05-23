describe('growingDancer', function() {
  var growingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    growingDancer = new GrowingDancer(30, 30, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(growingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node oscillate in size', function() {
    sinon.spy(growingDancer.$node, 'animate');
    growingDancer.step();
    expect(growingDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should only call step once when object is created', function() {
      sinon.spy(growingDancer, 'step');
      expect(growingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(growingDancer.step.callCount).to.be.equal(0);
    });
  });
});