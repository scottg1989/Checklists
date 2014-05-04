/*global Checklist */

var checklistApp = angular.module('checklistApp', []);

checklistApp.controller('ChecklistCtrl', function ($scope) {
  $scope.checklists = [
    new Checklist('hello'),
    new Checklist('h2')
  ];
});