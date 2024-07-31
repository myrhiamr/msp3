const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
  console.log('Register attempt for:', req.body.email);
  try {
    const { username, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      console.log('Registration failed: Email already exists');
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      username,
      email,
      password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    console.log('User registered successfully:', email);

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        console.log('JWT generated for:', email);
        res.json({ token });
      }
    );
  } catch (err) {
    console.error('Registration error:', err.message);
    res.status(500).send('Server error');
  }
};

exports.login = async (req, res) => {
  console.log('Login attempt for:', req.body.email);
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      console.log('Login failed: User not found');
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Login failed: Invalid password');
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        console.log('Login successful for:', email);
        res.json({ token });
      }
    );
  } catch (err) {
    console.error('Login error:', err.message);
    res.status(500).send('Server error');
  }
};