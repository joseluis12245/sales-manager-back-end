const userManagementRoutes = require("./userManagement/routes");
const salesManagementRoutes = require("./userManagement/routes");

module.exports = (app) => {
    //Load routes

    // User Data
    app.use("/api/v1/user-management", userManagementRoutes);


    // Sales Data
    // app.user("/api/v1/sales-management", )
};