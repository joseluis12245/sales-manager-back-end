const registerUserController = require('../../../controllers/userManagement');

module.exports = (router) =>{
    router.post("/insert_clients", registerUserController.insertClientsToDB);
}
