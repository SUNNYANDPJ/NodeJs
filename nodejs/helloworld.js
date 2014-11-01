var http = require('http');

http.createServer(function(res,rep)
	{
		rep.writeHead(200,{'Context-Type' : 'text/plain'});
		rep.end('hello world   test1\n');
     }).listen(8888);


console.log('Server is on it?');