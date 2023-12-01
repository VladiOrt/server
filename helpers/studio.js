const axios = require("axios").default;
require ('dotenv').config();
const { URL_STUDIO_GHIBLI } = process.env

const getInfo = async (endpoint) => {
    try {        
        let URL= URL_STUDIO_GHIBLI+"/"+endpoint    
        let Resultado = await axios.get( URL, {})
        .then(({ data }) => {
            return data
        })
        return Resultado
    } catch (error) {
        return "Ocurrio un error al Consultar el endpoint"  
    }
} 

module.exports = {
    getInfo
}