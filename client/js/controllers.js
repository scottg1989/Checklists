/*global Checklist, ChecklistSection, ChecklistItem */

var checklistApp = angular.module('checklistApp', ['ngRoute', 'ngResource'])
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

checklistApp.factory('Checklists', function ($resource) {
  return $resource(
    'http://localhost:8080/api/checklists/:id',
    { id: "@id" }
  );
});

function dataToChecklistItem(data) {
  return new ChecklistItem(data.name, data.value);
}

function dataToChecklistSection(id, data) {
  return new ChecklistSection(id, data.name, data.items.map(function (val) {
    return dataToChecklistItem(val);
  }));
}

function dataToChecklist(data) {
  var checklist = new Checklist(data._id, data.name, data.sections.map(function (val, i) {
    return dataToChecklistSection(i, val);
  }));
  checklist.setImageUrl(data.imageUrl);
  return checklist;
}

checklistApp.controller('ChecklistCtrl', function ($scope, Checklists) {
  $scope.checklists = [];

  Checklists.query(function (response) {
    var i;
    for (i = 0; i < response.length; i++) {
      $scope.checklists.push(dataToChecklist(response[i]));
    }
  });
});

checklistApp.controller('ChecklistDetailCtrl', function ($scope, $routeParams, Checklists) {
  var checklistId = $routeParams.checklistId;

  var checklist;
  Checklists.get({id: checklistId}, function (response) {
    checklist = dataToChecklist(response);

    var section = ($routeParams.sectionId === undefined
        ? checklist.getSections()[0]
        : _.find(checklist.getSections(), function (section) {
          return section.getId() === parseInt($routeParams.sectionId, 10);
        }));

    $scope.checklistId = checklistId;
    $scope.checklist = checklist;
    $scope.activeSection = section;
  });
});


