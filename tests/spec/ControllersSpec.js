/*global describe, expect, beforeEach, it, inject, ChecklistCtrl */

describe('ChecklistCtrl', function () {

  beforeEach(module('checklistApp'));

  it('should create "checklists" model', inject(function ($controller) {
    var scope = {},
      ctrl = $controller('ChecklistCtrl', {$scope: scope});

    expect(scope.checklists.length).toBe(2);
  }));

});