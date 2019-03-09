var https=require('https');
var server=https.createServer(function() {
    console.log('got a request!');
    response.write('hi');
    response.end();
});
server.listen(3000);