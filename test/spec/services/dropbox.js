'use strict';

describe('Service: dropbox', function () {

  // load the service's module
  beforeEach(module('bedcon2013DemoApp'));

  // instantiate service
  var dropbox;
  beforeEach(inject(function (_dropbox_) {
    dropbox = _dropbox_;
  }));

  it('should do something', function () {
    expect(!!dropbox).toBe(true);
  });

});
