const { UsersModel } = require("../models")

module.exports = {
  create: ( dataUser ) => UsersModel.create( dataUser ),
  countExists: ( dataUser ) => UsersModel.countDocuments( dataUser ),
  deleteUserById: ( id ) => UsersModel.deleteOne({_id : id }),
  updateActiveUser: ( id, active ) => UsersModel.updateOne({_id : id }, { $set: {is_active: active}}),
  updateUserById: ( id, dataUser ) => UsersModel.updateOne({_id : id }, { $set: dataUser }),
  getAllUsers: () => UsersModel.find(),
  getUserById: (id) => UsersModel.findOne({_id : id }),
}