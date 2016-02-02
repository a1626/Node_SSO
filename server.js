var clientController = require('./controller/client');
express = require('express'),
bodyParser = require('body-parser'),
ejs = require('ejs'),
mongoose = require('mongoose'),
userController = require('./controller/user'),
app = express();


//connect to mongodb
mongoose.connect('mongodb://localhost:27017/sso');

//set view engine
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

// Create endpoint handlers for /client
app.route('/clients')
  .post(clientController.postClients)
  .get( clientController.getClients);
  
// Create endpoint handlers for /users
app.route('/users')
  .post(userController.postUsers)
  .get(userController.getUsers);  
  
  
  app.listen(3000);