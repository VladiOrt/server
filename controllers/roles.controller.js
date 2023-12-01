const { request } = require('express')
const { response } = require('express');
const { rolesResolver } = require('../resolvers');

require('dotenv').config();

module.exports = {
    getRoles: async (req = request, res = response) => {
        try {           
            const data = await rolesResolver.getAllRoles()            
            res.status(200).json({ ok: true, data: data})        
        } catch (error) {
            res.status(500).json({ ok: false , msg: "Error al consultar los roles : " + error.message })
        }
    }
}