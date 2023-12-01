require ('dotenv').config();
const Cryptr = require('cryptr')
const { KEY_ENCRYPT } = process.env
const cryptr = new Cryptr(KEY_ENCRYPT);

const encryptText = async (text) => {
    try {        
        let textEncrypt = cryptr.encrypt(text)
        return textEncrypt        
    } catch (error) {
        return "Ocurrio un error al Encriptar"  
    }
} 
const decryptText = async (textEncrypt) => {
    try {        
        let textDecrypt = cryptr.decrypt(textEncrypt)
        return textDecrypt        
    } catch (error) {
        console.log(error)
        return "Ocurrio un error al Desencriptar"  
    }
}
 
const adaptationCreateUser = async (data) => {
    try {
        let newData = Object.assign({ is_active : true }, data)
        let encrypPass = await encryptText(newData.pass)        
        newData['pass'] = encrypPass        
        return newData        
    } catch (error) {
        console.log(error)
        return("Ocurrio un error al adaptar datos")
    }
}
const adaptationGetAllUsers = async (data) => {
    try {
        let usersDataDecrypt = []
        data.forEach(async function(data, index) {         
            let newData = data
            newData.pass = await decryptText( newData.pass )
            usersDataDecrypt.push(newData)
        });
        return usersDataDecrypt        
    } catch (error) {
        console.log(error)
        return("Ocurrio un error al adaptar datos")
    }
}

 
const adaptationGetUser = async (data) => {
    try {
        data.pass = await decryptText( data.pass )    
        return data        
    } catch (error) {
        console.log(error)
        return("Ocurrio un error al adaptar datos")
    }
}


module.exports = {
    adaptationCreateUser,
    adaptationGetUser,
    adaptationGetAllUsers
}