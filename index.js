var http = require('http'),
    MAX_RES = 1000,
    MIN_VAL = 800;

var getRandomRes = function() {
  return Math.max(Math.round(Math.floor(Math.random() * MAX_RES) / 10) * 10, MIN_VAL);
};

http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.writeHead(200, {'Content-Type': 'application/json'});
  data = [];
  for (var i = 0; i < 30; i++) {
    data.push({
      url: 'http://placeimg.com/' + getRandomRes() + '/' + getRandomRes() + '/animals'
    });
  }
  res.write(JSON.stringify(data));
  res.end();
}).listen(4444, '0.0.0.0');
