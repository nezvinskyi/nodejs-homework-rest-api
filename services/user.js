const { User } = require('../models');

const getById = id => User.findById(id);

const getOne = filter => User.findOne(filter);

const addUser = async ({ email, password }) => {
  const newUser = await new User({ email });
  newUser.setPassword(password);
  newUser.generateAvatar(email);
  return newUser.save();
};

const updateById = (id, updateData) => {
  return User.findByIdAndUpdate(id, updateData, { new: true });
};

module.exports = {
  getById,
  getOne,
  addUser,
  updateById,
};
