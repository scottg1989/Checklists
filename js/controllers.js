/*global Checklist, ChecklistSection, ChecklistItem */

var checklistApp = angular.module('checklistApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.when('/check', {
      templateUrl: 'templates/Checklists.html',
      controller: 'ChecklistCtrl'
    })
  });

checklistApp.controller('ChecklistCtrl', function ($scope) {
  $scope.checklists = [
    new Checklist('Checklist 1', [
      new ChecklistSection('Checklist1 Section1', [
        new ChecklistItem('C1S1 a', 'A'),
        new ChecklistItem('C1S1 b', 'B'),
        new ChecklistItem('C1S1 c', 'C')
      ]),
      new ChecklistSection('Checklist1 Section2', [
        new ChecklistItem('C1S2 a', 'A'),
        new ChecklistItem('C1S2 b', 'B'),
        new ChecklistItem('C1S2 c', 'C')
      ])
    ]),
    new Checklist('Checklist 2', [
      new ChecklistSection('Checklist2 Section1', [
        new ChecklistItem('C2S1 a', 'aa'),
        new ChecklistItem('C2S1 b', 'bb')
      ])
    ])
  ];
});