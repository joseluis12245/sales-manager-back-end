const registerUserController = require('../../../controllers/userManagement');

module.exports = (router) =>{
    router.post("/create_user", registerUserController.insertDataToDB);
}
