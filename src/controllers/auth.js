require('dotenv/config')
const { response } = require('../helper/send')
const authModel = require('../models/auth')
const JWT = require('jsonwebtoken')
module.exports = {
    login: async(req, res) => {
        try{
            const{
                username,
                password,
            } = req.body;
            
            const result = await authModel.getVerify(username, password);
            console.log(result[0].id)
            if(result[0].id !== undefined){
                const token = JWT.sign(
                    { 
                        id: result.Id,
                        category: req.body.category
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '24h'
                    }
                )
                await authModel.updateUser(username, password, token, result[0].id)
                response(res, 200, {message: "the user was created", token: token})            
            }
            else{
                response(res, 406, {message: "the user is not found"})            
            }
            

        }catch(error){
            console.warn(error);
            response(res, 500, {message: error})            
        }
    },
    createUser: async(req, res) => {
        try{
            const{
                username,
                password,
                category
            } = req.body;

            console.log(username, password);
            

            // the model create a new user
            const result = await authModel.createUser('', '', '');
            const token = JWT.sign(
                { 
                    id: result.insertId,
                    category: category
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: '24h'
                }
            )
            if(result.insertId !== undefined){
                await authModel.updateUser(username, password, token, result.insertId)
            }
            
            response(res, 200, {message: "the user was created", token: token})            

        }catch(error){
            console.warn(error);
            response(res, 500, {message: error})            
        }
    },
    readUser: async(req, res) => {
        try{
            const token = req.headers.authorization
            // the model read a new user
            const result = await authModel.readUser(id);
            response(res, 200, {message: "the data have found", data: result})            
        }catch(error){
            console.warn(error);
            response(res, 500, error)            
        }
    },
    updateUser: async(req, res) => {
        const token = req.headers.authorization
        try{    
            let data = JWT.verify(token, process.env.JWT_SECRET);
            let id = data.id;
            let category = data.category
            
            const{
                username,
                password
            } = req;

            if(id !== undefined){
                await authModel.updateUser(username, password, token, result.insertId)
            }
            response(res, 200, result)
        

        }catch(error){
            
            console.warn(error);
            response(res, 500, error)            
        
        }
    },
    deleteUser: async(req, res) => {
        const token = req.headers.authorization
        try{
            let data = JWT.verify(token, process.env.JWT_SECRET);
            let id = data.id;
            let category = data.category
        
            const result = await authModel.deleteUser(id)
            response(res, 200, result)
        
        }catch(error){
            console.warn(error);
            response(res, 500, error)            
        }
    },
    getStatusToken: async(token) => {
        try{
            const result = await authModel.getStatusToken(token)
            console.log(result.length);
            return(result)

        }catch(error){
            console.warn(error);
            //response(res, 500, error)            
        }
    },
}
