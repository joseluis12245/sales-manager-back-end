const salesController = require('../../../controllers/salesManagement');

module.exports = (router) =>{
    router.post("/add_sale", salesController.insertDataToDB);
}