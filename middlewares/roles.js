const { rolesResolver } = require('../resolvers');

const validateRol = async( req, res , next ) => {
    let findRole = await rolesResolver.roleExist((req.body).rol)
    if(findRole > 0){
        next();
        return;
    }
    return res.status(403).json({
        ok: false,
        msg: "Necesitar proporcionar un rol de usuario valido",
    });
}

module.exports = {
    validateRol
}