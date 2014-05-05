/*global Checklist, ChecklistSection, ChecklistItem */

var checklistApp = angular.module('checklistApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'templates/Checklists.html',
      controller: 'ChecklistCtrl'
    }).when('/checklist/:checklistId', {
      templateUrl: 'templates/ChecklistDetail.html',
      controller: 'ChecklistDetailCtrl'
    }).when('/checklist/:checklistId/:sectionId', {
      templateUrl: 'templates/ChecklistDetail.html',
      controller: 'ChecklistDetailCtrl'
    });
  });

var checklist1 = new Checklist(1, 'Checklist 1', [
    new ChecklistSection(1, 'Checklist1 Section1', [
      new ChecklistItem('C1S1 a', 'A'),
      new ChecklistItem('C1S1 b', 'B'),
      new ChecklistItem('C1S1 c', 'C')
    ]),
    new ChecklistSection(2, 'Checklist1 Section2', [
      new ChecklistItem('C1S2 a', 'A'),
      new ChecklistItem('C1S2 b', 'B'),
      new ChecklistItem('C1S2 c', 'C')
    ])
  ]);
checklist1.setImageUrl('http://www.copterplane.net/wp-content/uploads/2012/03/Cessna-172.jpg');

var checklist2 = new Checklist(2, 'Checklist 2', [
    new ChecklistSection(3, 'Checklist2 Section1', [
      new ChecklistItem('C2S1 a', 'aa'),
      new ChecklistItem('C2S1 b', 'bb')
    ])
  ]);
checklist2.setImageUrl('http://image.minyanville.com/assets/FCK_Jan2011/Image/justin/737.jpg');


var checklists = [checklist1, checklist2];



checklistApp.controller('ChecklistCtrl', function ($scope) {
  $scope.checklists = checklists;
});

checklistApp.controller('ChecklistDetailCtrl', function ($scope, $routeParams) {
  var checklistId = parseInt($routeParams.checklistId, 10);

  var checklist = _.find(checklists, function (checklist) {
    return checklist.getId() === checklistId;
  });

  var section = ($routeParams.sectionId === undefined
      ? checklist.getSections()[0]
      : _.find(checklist.getSections(), function (section) {
        return section.getId() === parseInt($routeParams.sectionId, 10);
      }));

  $scope.checklistId = checklistId;
  $scope.checklist = checklist;
  $scope.activeSection = section;
});
