require('dotenv/config')
const { response } = require('../helper/send')
const dataModel = require('../models/data')
const JWT = require('jsonwebtoken')

module.exports = {
    createData: async(req, res) => {
        const token = req.headers.authorization
        try{
            let data = JWT.verify(token, process.env.JWT_SECRET);
            let id = data.id;
            let category = data.category
            const{
                name,
                position,
                department
            } = req.body;
            
            if(category == 1){
                const result = await dataModel.createData(name, position, department, id)
                response(res, 200, {message: "the data was created"})            
            }
            response(res, 406, {message: "the user don't have access"})            

        }catch(error){
            response(res, 500, {message: error})            
        }
    },
    readData: async(req, res) => {
        const token = req.headers.authorization
        try{    
            let data = JWT.verify(token, process.env.JWT_SECRET);
            let id = data.id;

            const result = await dataModel.readData(id)
            response(res, 200, result)

        }catch(error){   
            console.warn(error);
            response(res, 500, error)            
        }
    },
    updateData: async(req, res) => {
        const token = req.headers.authorization
        try{    
            let data = JWT.verify(token, process.env.JWT_SECRET);
            let id_user = data.id;
            let category = data.category
            console.log(category);
            
            const{
                name,
                position,
                department,
                id
            } = req.body;

            
            if(category == 1){
                const result = await dataModel.updateData(name, position, department, id)
                response(res, 200, result)
            }
            response(res, 406, {message: "the user don't have access"})

        }catch(error){   
            console.warn(error);
            response(res, 500, error)            
        }
    },
    deleteData: async(req, res) => {
        const token = req.headers.authorization
        try{    
            let data = JWT.verify(token, process.env.JWT_SECRET);
            //let id = data.id;
            let category = data.category

            const {
                id
            } = req.body;

            if(category == 1){
                const result = await dataModel.deleteData(id)
                response(res, 200, result)
            }
            response(res, 406, {message: "the user don't have access"})
            

        }catch(error){   
            console.warn(error);
            response(res, 500, error)            
        }
    }
}
