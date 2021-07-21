const { user: service } = require('../../services');

const logout = async (req, res, next) => {
  try {
    await service.updateById(req.user._id, { token: null });
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

module.exports = logout;
