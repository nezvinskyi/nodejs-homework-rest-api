const getCurrentUser = (req, res, next) => {
  res.status(200).json({
    status: 'Success',
    code: 200,
    data: {
      email: req.user.email,
      subscription: req.user.subscription,
    },
  });
};

module.exports = getCurrentUser;
