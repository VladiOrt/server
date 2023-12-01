const { Schema, model } =  require('mongoose');

const rolUserSchema = Schema(
    {
        rol_name: {
            type: String,
            required: true
        }
    }
)

module.exports =  model('rols' , rolUserSchema);