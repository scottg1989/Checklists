var express = require('express'),
  request = require('request'),
  bodyParser = require('body-parser'),
  fs = require('fs');

var couchUrl = 'http://127.0.0.1:5984/';
var checklistDbUrl = 'http://127.0.0.1:5984/checklists/';

var guid = (function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
  }
  return function () {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  };
}());

function deleteDatabase(callback) {
  console.log('Deleting database..');
  request({method: 'delete', url: checklistDbUrl}, function (err, result, body) {
    if (err) {
      console.log('error: ' + err);
      return;
    }

    console.log(result.statusCode + ": " + body);

    callback();
  });
}

function createDatabase(callback) {
  console.log('Creating database..');
  request({method: 'put', url: checklistDbUrl}, function (err, result, body) {
    if (err) {
      console.log('error: ' + err);
      return;
    }

    console.log(result.statusCode + ": " + body);

    callback();
  });
}

function addDocument(data) {
  var options = {
    method: 'put',
    body: data,
    json: true,
    url: checklistDbUrl + guid().replace(/-/g, '')
  };

  request(options, function (err, result, body) {
    if (err) {
      throw err;
    }

    console.log(result.statusCode + ": " + body);
  });
}

function addDocuments() {
  console.log('Adding default documents..');

  fs.readdir('initialData/', function (err, files) {
    if (err) {
      throw err;
    }

    files.filter(function (val) {
      return (/[\w\W]*\.json/).test(val);
    }).forEach(function (val) {
      fs.readFile('initialData/' + val, 'utf8', function (err, data) {
        if (err) {
          throw err;
        }
        addDocument(data);
      });
    });
  });
}

function setupDatabase() {
  deleteDatabase(function () {
    createDatabase(function () {
      addDocuments();
    });
  });
}

function getChecklistById(checklistid, callback) {
  var options = {
    method: 'get',
    json: true,
    url: checklistDbUrl + checklistid
  };

  request(options, function (err, result, body) {
    if (err) {
      throw err;
    }

    callback(body);
  });
}

function getChecklists(req, res) {
  var options = {
    method: 'get',
    json: true,
    url: checklistDbUrl + '_all_docs/'
  };

  request(options, function (err, result, body) {
    if (err) {
      res.send(result);
      return;
    }

    var allChecklists = [];
    var checklistCount = 0;

    body.rows.forEach(function (element, index, array) {
      getChecklistById(element.id, function (checklist) {
        allChecklists.push(checklist);
        checklistCount++;
        if (checklistCount === body.rows.length) {
          res.send(200, allChecklists);
        }
      });
    });
  });
}

function getChecklist(req, res) {
  var id = req.params.id;

  getChecklistById(id, function (checklist) {
    res.send(200, checklist);
  });
}

if (process.argv.length > 2) {
  var i;
  for (i = 2; i < process.argv.length; i++) {
    if (process.argv[i] === 'init-db') {
      console.log('running db init..');
      setupDatabase();
    }
  }
} else {
  console.log("Express server running at => http://localhost:8080" + "/\nCTRL + C to shutdown");



  var app = express();
  app.use(bodyParser());

  app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

  app.get('/api/checklists', getChecklists);
  app.get('/api/checklists/:id', getChecklist);

  app.listen(8080);



}