/**
 * Created by jeevan on 28/1/15.
 */

var app = require('./config/config')();

// configure express routes
require('./config/routes.js')(app);

app.listen('3000');
console.log('listening on port 3000');