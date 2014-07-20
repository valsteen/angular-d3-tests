'use strict';

describe('Service: Useractivity', function () {

  // load the service's module
  beforeEach(module('valsteen.Timesheet'));

  // instantiate service
  var Useractivity;
  beforeEach(inject(function (_Useractivity_) {
    Useractivity = _Useractivity_;
  }));

  it('should do something', function () {
    expect(!!Useractivity).toBe(true);
  });

  it('should have a UserActivity service', function () {
        expect(Useractivity).toBeDefined();
    });

});
