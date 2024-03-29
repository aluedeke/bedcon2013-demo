'use strict';

describe('Controller: FilesCtrl', function () {

  // load the controller's module
  beforeEach(module('bedcon2013DemoApp'));

  var FilesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    FilesCtrl = $controller('FilesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
