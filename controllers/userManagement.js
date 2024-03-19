const registerUserModel = require("../models/userRegister")
const clientsListModel = require("../models/clientsList")

const controller = {
    /**
     * @param {Object} req - Http request made to the server.
     * @param {Object} res - Http response made for the server.
     */
    async insertDataToDB(req, res) {
        try{
            const myuser = new registerUserModel(req.body);
            await myuser.save();
            res.send(myuser)
        }catch(err){
            res.status(400).send(err);
        }
    },

     /**
     * @param {Object} req - Http request made to the server.
     * @param {Object} res - Http response made for the server.
     */
    async getUserInformation(req, res){
        try{
            const userExist = await registerUserModel.findOne( {user: req.body.user} ); 

            console.log('user exit',userExist )
            if(userExist !== null){
                if(userExist.password === req.body.password){
                    res.status(200).send({
                        id: userExist._id,
                        userValid: true
                    });
                }
            }else{
                res.status(200).send({
                    userValid: false
                });
            }
        }catch(err){
            res.status(400).send(err);
        }
    },

     /**
     * @param {Object} req - Http request made to the server.
     * @param {Object} res - Http response made for the server.
     */
      async insertClientsToDB(req, res){
        try{
            const newClient = new clientsListModel(req.body)
            await newClient.save();
           res.send(newClient);
        }catch(err){
            res.status(400).send(err);
        }
    }
}

module.exports = controller;