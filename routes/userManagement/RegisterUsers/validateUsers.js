const registerUserController = require('../../../controllers/userManagement');

module.exports = (router) =>{
    router.post("/validate_user", registerUserController.getUserInformation);
}