const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const getCurrentUser = require('./getCurrentUser');
const updateSubscription = require('./updateSubscription');
const updateAvatar = require('./updateAvatar');
const verify = require('./verify');

module.exports = {
  signup,
  login,
  logout,
  getCurrentUser,
  updateSubscription,
  updateAvatar,
  verify,
};
