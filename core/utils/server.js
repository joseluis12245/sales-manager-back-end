const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const User = require("./../../models/userRegister");
require("dotenv/config");

class Server {
    constructor(){
       this.app = express();
       this.initConfig()
    }

    initConfig(){
        const self = this;
        //Body parser to json
        self.app.use(express.json())

        //Enable CORS (Cross-Origin Resource Sharing)
        self.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header(
                "Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept"
            );
            next();
        });

        //Connect To Mongo
        mongoose.connect(process.env.DB_CONNECTION_STRING)
    }

      // Get express app
      getExpressApp() {
        return this.app;
    }

    // Get routes 
    getAPIRoutes() {
        const routes = [];
        const self = this;

        self.app._router.stack.forEach(function (r) {
            if (r.route && r.route.path && r.route.path !== "/*") {
                // Add route
                routes.push({
                    "route": r.route.path,
                    "type": "config",
                    "method": "GET"
                });
            }

            // //When is swagger route
            // if (r.name === "swaggerInitFn") {
            //     // Get Reg expression to get pare
            //     let regexp = r.regexp.toString();
            //     regexp = util.replaceAll(regexp, "^\\/", "");
            //     regexp = util.replaceAll(regexp, "\\/", "/");
            //     regexp = util.replaceAll(regexp, "/?(?=/|$)/i", "");

            //     // Add route
            //     routes.push({
            //         "route": regexp,
            //         "type": "config",
            //         "method": "GET"
            //     });
            // }

            // When is a parent route
            if (r.name === "router") {
                r.handle.stack.forEach(function (rc) {
                    if (rc.route && rc.route.path && rc.route.path !== "/*") {
                        // Get Reg expression to get pare
                        let regexp = r.regexp.toString();
                        regexp = util.replaceAll(regexp, "^\\/", "");
                        regexp = util.replaceAll(regexp, "\\/", "/");
                        regexp = util.replaceAll(regexp, "/?(?=/|$)/i", "");

                        // Add route
                        routes.push({
                            "route": `${regexp}${rc.route.path}`,
                            "type": "api",
                            "method": (rc.route.methods.get ? "GET" : "POST")
                        });
                    }
                });
            }
        });

        return routes;
    }

    startServer(){
        const self = this;
        
        //Listening port 3010
        self.app.listen(3010)
    }
}

module.exports = Server;