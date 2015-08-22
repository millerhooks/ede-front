/**
 * Created by peter on 11/19/14.
 */
var config = require('./server-config');
var http = require("http");
var https = require("https");
var querystring = require("querystring");
var request = require('request');
/**
 * getJSON:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */
var getJSON = exports.getJSON = function(options, onResult)
{
    console.log("rest::getJSON");

    var prot = options.port == 443 ? https : http;
    var req = prot.request(options, function(res)
    {
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            try {
                var obj = JSON.parse(output);
                onResult(res.statusCode, obj);
            } catch(err) {
                console.log(err.message);
                onResult(res.statusCode, err);
            }
        });
    });

    req.on('error', function(err) {
        //res.send('error: ' + err.message);
    });

    req.end();
};

exports.handleRequest = function (req, res) {
    // Short and sweet. Pipe the full request on to the host.

    // Add trailing slash if request doesn't have one
    var url = config.api_host + req.originalUrl; // + (req.originalUrl.substr(-1) != '/' ? '/' : '')
    console.log(req.originalMethod + ": " + url);
    req.pipe(request(url)).pipe(res);
};

