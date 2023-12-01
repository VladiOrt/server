const { request } = require('express')
const { response } = require('express');
const { usersResolver } = require('../resolvers');
const { usersHelpers } = require('../helpers')

require('dotenv').config();

module.exports = {
    addUser: async (req = request, res = response) => {
        try {           
            const data = await usersHelpers.adaptationCreateUser(req.body)     
            let dataFind = (req.body)  
            delete dataFind['pass']
            const existUser =  await usersResolver.countExists(dataFind)
            if(existUser != 0 ){
                res.status(203).json({ ok: true, msg: "Ya existe el usuario"}) 
            } else{
                const createUser =  await usersResolver.create(data)            
                res.status(200).json({ ok: true, data: data})
            }                            
        } catch (error) {
            res.status(500).json({ ok: false , msg: "Error al agregar usuario : " + error.message })
        }
    },
    getAllUsers: async (req = request, res = response) => {
        try {
            
            const getAllUsers =  await usersResolver.getAllUsers()     
            const dataAllUser = await usersHelpers.adaptationGetAllUsers(getAllUsers)                               
            res.status(200).json({ ok: true, data: dataAllUser })
        } catch (error) {
            console.log({ msg: "Error en la busqueda de usuarios", error: error })
            res.status(500).json({ msg: "Error en la busqueda de usuarios", ok: false })
        }
    },
    getUserById: async (req = request, res = response) => {
        try {
            const{id} = req.params                        
            const getUser =  await usersResolver.getUserById(id)
            if(getUser){
                const dataUser = await usersHelpers.adaptationGetUser(getUser)                               
                res.status(200).json({ ok: true, data: dataUser })
            }else{
                res.status(203).json({ ok: true, msg: "Id no encontrado en la BD" })
            }                                       
        } catch (error) {
            console.log({ msg: "Error en la busqueda del usuario", error: error })
            res.status(500).json({ msg: "Error en la busqueda de usuario proporcione un id Adecuado", ok: false })
        }
    },
    updateUser: async (req = request, res = response) => {
        try {
            const { id } = req.query;
                 
            const data = await usersHelpers.adaptationCreateUser(req.body)     
            const updateUser =  await usersResolver.updateUserById(id,data)
           
            res.status(200).json({ ok: true, msg: "Usuario actualizado con exito"}) 
                 
        } catch (error) {
            res.status(500).json({ ok: false , msg: "Error al agregar usuario : " + error.message })
        }


    },
    deleteUser: async (req = request, res = response) => {
        try {
            const{id} = req.params                        
            const deleteUser =  await usersResolver.deleteUserById(id)
            if(deleteUser){                                              
                res.status(200).json({ ok: true, msg: "Usuario eliminado correctamente" })
            }else{
                res.status(203).json({ ok: true, msg: "Id no encontrado en la BD" })
            }                                       
        } catch (error) {
            console.log({ msg: "Error en la eliminacion del usuario", error: error })
            res.status(500).json({ msg: "Error en la eliminacion de usuario proporcione un id Adecuado", ok: false })
        }
    },
}