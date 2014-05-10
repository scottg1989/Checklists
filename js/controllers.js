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

var checklist3 = new Checklist(3, 'Cessna 172 SP', [
    new ChecklistSection(4, 'Pre-Start Checklist', [
      new ChecklistItem('Parking Brakes', 'SET'),
      new ChecklistItem('Throttle', 'CLOSED'),
      new ChecklistItem('Magneto/Starter Switch', 'OFF'),
      new ChecklistItem('Battery & Alternator Master Switches', 'OFF'),
      new ChecklistItem('Avionics', 'OFF'),
      new ChecklistItem('Fuel Pump Switch', 'OFF'),
      new ChecklistItem('Mixture /Fuel Flow', 'CUTOFF'),
      new ChecklistItem('Battery Switch', 'ON'),
      new ChecklistItem('Flight controls', 'CHECK'),
      new ChecklistItem('Flaps', 'UP'),
      new ChecklistItem('Fuel Quantity', 'CHECK'),
      new ChecklistItem('Fuel Selector', 'BOTH'),
      new ChecklistItem('Avionics Switch', 'ON'),
      new ChecklistItem('Check Weather', '(Atis, Flight Services)'),
      new ChecklistItem('Request Clearance', ''),
      new ChecklistItem('Transponder', 'STANDBY'),
      new ChecklistItem('Beacon/Strobe Light', 'ON')
    ]),
    new ChecklistSection(5, 'Startup Checklist', [
      new ChecklistItem('Throttle', 'OPEN 1/4 INCH'),
      new ChecklistItem('Mixture', 'RICH'),
      new ChecklistItem('Engine and Propeller Area', 'CLEAR'),
      new ChecklistItem('Fuel Pump Switch', 'ON'),
      new ChecklistItem('Magneto/Starter Switch', 'START'),
      new ChecklistItem('Throttle', 'IDLE'),
      new ChecklistItem('Alternator Switch', 'ON'),
      new ChecklistItem('Oil Pressure, Ammeter', 'CHECK'),
      new ChecklistItem('Engine Instruments', 'CHECK'),
      new ChecklistItem('Fuel Pump Switch', 'OFF'),
      new ChecklistItem('Annunciator Lights', 'CHECK'),
      new ChecklistItem('Nav Lights', 'ON')
    ]),
    new ChecklistSection(6, 'Before Taxi Checklist', [
      new ChecklistItem('Nav Lights', 'ON'),
      new ChecklistItem('Taxi Lights', 'ON'),
      new ChecklistItem('Heading Indicator/Altimeter', 'SET'),
      new ChecklistItem('Instruments', 'NORMAL OPERATION'),
      new ChecklistItem('Radios and Avionics', 'CHECKED and SET'),
      new ChecklistItem('Autopilot', 'SET and OFF'),
      new ChecklistItem('Request Taxi Clearance', '')
    ]),
    new ChecklistSection(7, 'Taxi Checklist', [
      new ChecklistItem('Throttle', 'MIN. POWER'),
      new ChecklistItem('Mixture', 'RICH'),
      new ChecklistItem('Parking Brake', 'RELEASE'),
      new ChecklistItem('Brakes', 'CHECK during taxi'),
      new ChecklistItem('Directional Gyro', 'PROPER IND. during turns'),
      new ChecklistItem('Turn Coordinator', 'PROPER IND. during turns'),
      new ChecklistItem('Artificial Horizon', 'ERECT during turns'),
      new ChecklistItem('Taxi to assigned runway', 'SPEED Max. 20 knots')
    ]),
    new ChecklistSection(8, 'Before Take-off Checklist', [
      new ChecklistItem('Parking Brake', 'SET'),
      new ChecklistItem('Fuel Quantity', 'CHECK'),
      new ChecklistItem('Fuel Selector Valve', 'BOTH'),
      new ChecklistItem('Throttle', 'IDLE'),
      new ChecklistItem('Mixture', 'RICH'),
      new ChecklistItem('Alternator Switch', 'VERIFY ON'),
      new ChecklistItem('Throttle', '1800 RPM'),
      new ChecklistItem('Magnetos', 'CHECK'),
      new ChecklistItem(' ', '< 150 RPM drop on each,'),
      new ChecklistItem(' ', '< 50 RPM drop between'),
      new ChecklistItem('Ammeter', 'CHECK Positive charge ind.'),
      new ChecklistItem('Throttle', 'IDLE'),
      new ChecklistItem('Oil Temperature', 'CHECK'),
      new ChecklistItem('Elevator Trim', 'SET for takeoff'),
      new ChecklistItem('Flaps', 'SET 0-10 degrees'),
      new ChecklistItem('Flight Controls', 'FREE AND CORRECT'),
      new ChecklistItem('Radios and Avionics', 'SET'),
      new ChecklistItem('Landing Lights', 'ON'),
      new ChecklistItem('Pitot Heat', 'ON'),
      new ChecklistItem('Transponder', 'ON'),
      new ChecklistItem('Request Takeoff Clearance', '')
    ]),
    new ChecklistSection(9, 'Take-off Checklist', [
      new ChecklistItem('Smoothly increase thrust to', 'FULL'),
      new ChecklistItem('Brakes', 'RELEASE'),
      new ChecklistItem('V1 =', '55 KIAS (descision)'),
      new ChecklistItem('Vr =', '65 KIAS (rotate)'),
      new ChecklistItem('Pitch', '10-15 degrees'),
      new ChecklistItem('At Positive Climb Rate', 'Touch Brakes'),
      new ChecklistItem('Trim for climb to maintain', '75 KIAS'),
      new ChecklistItem('At 500\' AGL', 'RETRACT Flaps if set'),
      new ChecklistItem('Engine Instruments', 'CHECK')
    ]),
    new ChecklistSection(10, 'Climb-out Checklist', [
      new ChecklistItem('Throttle', '2300 RPM'),
      new ChecklistItem('Mixture', 'RICH'),
      new ChecklistItem('Autopilot', 'CHECK and SET'),
      new ChecklistItem('Taxi Lights', 'OFF'),
      new ChecklistItem('Landing Lights', 'OFF'),
      new ChecklistItem('Airspeed', '80 KIAS  2300 RPM'),
      new ChecklistItem('Climb Rate', '700 fpm'),
      new ChecklistItem('ATC', 'AS REQUIRED')
    ]),
    new ChecklistSection(11, 'Cruise Checklist', [
      new ChecklistItem('Accelerate to cruise speed', '110 KIAS  2500 RPM'),
      new ChecklistItem('Engine+Instruments', 'CHECK'),
      new ChecklistItem('Engine Temperatures', 'STABILIZE at cruise cond.'),
      new ChecklistItem('Fuel Quantity', 'CHECK'),
      new ChecklistItem('Radios', 'TUNED and SET'),
      new ChecklistItem('Autopilot', 'CHECK and SET'),
      new ChecklistItem('Lights', 'as required'),
      new ChecklistItem('Engine Instruments', 'CHECK')
    ]),
    new ChecklistSection(12, 'Descent Checklist', [
      new ChecklistItem('Atis/Airport Information', 'CHECK'),
      new ChecklistItem('Fuel Selector', 'BOTH'),
      new ChecklistItem('Altimeter', 'CHECK'),
      new ChecklistItem('Radios', 'SET'),
      new ChecklistItem('Descent Speed', '100 KIAS  2000 RPM'),
      new ChecklistItem('Descent Rate', '-700 fpm'),
      new ChecklistItem('Flaps', 'CHECK UP')
    ]),
    new ChecklistSection(13, 'Approach Checklist', [
      new ChecklistItem('Localizer Level Flight :', ''), //checkable=false
      new ChecklistItem('Fuel Pump', 'ON'),
      new ChecklistItem('Speed: Establish', '85 KIAS  2100 RPM'),
      new ChecklistItem('Landing Lights', 'ON'),
      new ChecklistItem('Flaps', '10 degrees'),
      new ChecklistItem('Speed: Establish', '80 KIAS  2100 RPM'),
      new ChecklistItem('Flaps', '20 degrees  2300 RPM'),
      new ChecklistItem('Turning toward runway: set flaps', 'FULL DOWN'),
      new ChecklistItem('Final Glideslope Descent :', ''), //checkable=false
      new ChecklistItem('Mixture', 'RICH (on final)'),
      new ChecklistItem('Speed: Establish', '75 KIAS 2100 RPM'),
      new ChecklistItem('Descent Rate', '-400 fpm'),
      new ChecklistItem('Elevator Trim', 'AS DESIRED'),
      new ChecklistItem('Parking Brake', 'VERIFY OFF')
    ]),
    new ChecklistSection(14, 'Landing Checklist', [
      new ChecklistItem('Autopilot', 'OFF'),
      new ChecklistItem('Landing Speed', '65 KIAS'),
      new ChecklistItem('Touchdown', 'MAIN WHEELS FIRST'),
      new ChecklistItem('Landing Roll', 'LOWER NOSE WHEEL'),
      new ChecklistItem('Brakes', 'MINIMUM REQUIRED')
    ]),
    new ChecklistSection(15, 'Taxi To Ramp', [
      new ChecklistItem('Flaps', 'RETRACT'),
      new ChecklistItem('Taxi Lights', 'ON'),
      new ChecklistItem('Landing Lights', 'OFF'),
      new ChecklistItem('Speed Max.', '20 knots'),
      new ChecklistItem('Throttle', 'AS REQUIRED'),
      new ChecklistItem('Elevator Trim', 'TAKEOFF SETTING'),
      new ChecklistItem('Avionics/Radios', 'AS REQUIRED'),
      new ChecklistItem('Transponder', '1200')
    ]),
    new ChecklistSection(16, 'Shutdown Checklist', [
      new ChecklistItem('Parking Brake', 'SET'),
      new ChecklistItem('Throttle', 'IDLE'),
      new ChecklistItem('Fuel Pump', 'OFF'),
      new ChecklistItem('Avionics Switch', 'OFF'),
      new ChecklistItem('Taxi Lights', 'OFF'),
      new ChecklistItem('Nav Lights', 'OFF'),
      new ChecklistItem('Pitot Heat', 'OFF'),
      new ChecklistItem('Mixture/Fuel Flow', 'CUTOFF'),
      new ChecklistItem('Fuel Selector Valve', 'OFF'),
      new ChecklistItem('Magneto/Starter Switch', 'OFF'),
      new ChecklistItem('Beacon/Strobe Light', 'OFF'),
      new ChecklistItem('Battery & Alternator Master Switches', 'OFF')
    ]),
    new ChecklistSection(17, 'Securing Aircraft', [
      new ChecklistItem('Parking Brake Verify', 'SET'),
      new ChecklistItem('Throttle Verify', 'IDLE'),
      new ChecklistItem('All Switches Verify', 'OFF')
    ])
  ]);

checklist3.setImageUrl('http://www.copterplane.net/wp-content/uploads/2012/03/Cessna-172.jpg');


var checklists = [checklist1, checklist2, checklist3];



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
