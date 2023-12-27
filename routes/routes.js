const userManagementRoutes = require("./userManagement/routes");

module.exports = (app) => {
    //Load routes
    app.use("/api/v1/user-management", userManagementRoutes);
};