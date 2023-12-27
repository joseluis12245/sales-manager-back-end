const Server = require("./core/utils/server");
const routes = require('./routes/routes');
const myServer = new Server();
const app = myServer.getExpressApp();

// Load server
myServer.startServer();

//Set routes
routes(app);