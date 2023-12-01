const { request } = require('express')
const { response } = require('express');
const { usersResolver } = require('../resolvers');
const { studioHelpers } = require('../helpers')

require('dotenv').config();

module.exports = {
    getInfoStudio: async (req = request, res = response) => {
        try {             
            const{id} = req.params 
            const dataUser = await usersResolver.getUserById(id)                                    
            if(dataUser){
                const { rol } = dataUser
                let dataInfo = await studioHelpers.getInfo(rol)
                res.status(200).json({ ok: true, data: dataInfo}) 
            } else{
                res.status(203).json({ ok: true, msg: "Id de usuario no encontrado"})
            }                         
            
        } catch (error) {
            res.status(500).json({ ok: false , msg: "Error al agregar usuario : " + error.message })
        }
    }
}