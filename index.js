/*
 * Nothing to see here
 */

const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
    response.json(process.env);
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});

