var config = require('./server-config'),
  fs = require('fs');

var responseCache = {};

function getMock(path, shouldCache) {
  var mockResponse = responseCache[path];

  shouldCache = shouldCache === true;

  if (!mockResponse) {
    mockResponse = fs.readFileSync(path);
    mockResponse = JSON.parse(mockResponse);
    mockResponse = JSON.stringify(mockResponse).replace(/http:\/\/api\.github\.com/gi, '/api');
    if (shouldCache) responseCache[path] = mockResponse;
  }

  return mockResponse;
}

function extractId(data, id) {
  if ('objects' in data)
    data = data.objects;
  for(var i in data) {
    if (data[i].id == id) {
      return data[i];
    }
  }
  return [];
};

exports.getMock = getMock;

exports.sendDefault = function sendDefault(req, res) {

  function isNumber(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
  }

  var endpoint,
    splitPath = req.params[0].split('?')[0].split("/"),
    resourceId = NaN,
    mockResponse;

  var mockPath = config.data_location;

  if (isNumber(splitPath[splitPath.length-1])) {
    // Last segment is a number.. assume id?
    mockPath += splitPath.slice(0, splitPath.length-1).join('/') + '/' + 'default.json';
    resourceId = parseInt(splitPath[splitPath.length-1]);
  } else {
    mockPath += req.params[0] + '/' + 'default.json';
  }

  if (splitPath.length > 2)
    endpoint = splitPath[splitPath.length - 2];

  try {
    mockResponse = getMock(mockPath, false);

    jsonData = JSON.parse(mockResponse);
    if (isNaN(resourceId))
      res.send(200, jsonData);
    else
      res.send(200, extractId(jsonData, resourceId));

  } catch (err) {
    console.log(err);
    res.send(500);
  }
};

