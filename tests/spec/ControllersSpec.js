/*global describe, expect, beforeEach, it, inject, ChecklistCtrl */

describe('ChecklistCtrl', function () {

  beforeEach(module('checklistApp'));

  it('should create "checklists" model', inject(function ($controller) {
    var scope = {},
      ctrl = $controller('ChecklistCtrl', {$scope: scope});

    expect(scope.checklists.length).toBe(2);
  }));

});

describe('ChecklistDetailCtrl', function () {

  beforeEach(module('checklistApp'));

  it('should create "checklist" model', inject(function ($controller) {
    var scope = {},
      routeParams = {checklistId: 1},
      ctrl = $controller('ChecklistDetailCtrl', {$scope: scope, $routeParams: routeParams});

    expect(scope.checklist.getId()).toBe(1);
  }));

  it('should have the first section as the active section', inject(function ($controller) {
    var scope = {},
      routeParams = {checklistId: 1},
      ctrl = $controller('ChecklistDetailCtrl', {$scope: scope, $routeParams: routeParams});

    expect(scope.activeSection).toBe(checklist1.getSections()[0]);
  }));

  it('should set the correct section based on route params', inject(function ($controller) {
    var scope = {},
      routeParams = {checklistId: 1, sectionId:2},
      ctrl = $controller('ChecklistDetailCtrl', {$scope: scope, $routeParams: routeParams});

    expect(scope.activeSection).toBe(checklist1.getSections()[1]);
  }));


});