const { subscribe } = require('../../api/users');
const { User } = require('../../models');

const signup = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    return res.status(409).json({
      status: 'Error',
      code: 409,
      message: 'Email is already in use',
      data: 'Conflict',
    });
  }
  try {
    const newUser = new User({ email });
    newUser.setPassword(password);
    await newUser.save();
    const { subscription } = newUser;
    res.status(201).json({
      status: 'Success',
      code: 201,
      data: {
        user: { email, subscription },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
};
