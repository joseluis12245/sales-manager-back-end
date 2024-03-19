const salesModel = require("../models/sales")


const controller = {
    /**
     * @param {Object} req - Http request made to the server.
     * @param {Object} res - Http response made for the server.
     */
    async insertDataToDB(req, res) {
        try{
            const sale = new salesModel(req.body);
            await sale.save();
            res.send(sale)
        }catch(err){
            res.status(400).send(err);
        }
    }
}

module.exports = controller;