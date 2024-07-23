const db = require('../db/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], function (err) {
      if (err) {
        return res.status(500).json({ error: 'Registration failed' });
      }
      res.status(200).json({ message: 'Registration successful' });
    });
  } catch (err) {
    res.status(500).json({ error: 'Error registering user' });
  }
};

const loginUser = (req, res) => {
  const { username, password } = req.body;
  db.get('SELECT * FROM users WHERE username = ?', [username], async (err, row) => {
    if (err || !row) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    const match = await bcrypt.compare(password, row.password);
    if (match) {
      const token = jwt.sign({ id: row.id }, secretKey, { expiresIn: '1h' });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: 'Authentication failed' });
    }
  });
};

const registerForAssessment = (req, res) => {
  const { userId, assessmentId } = req.body;
  db.run('INSERT INTO assessment_registrations (user_id, assessment_id) VALUES (?, ?)', [userId, assessmentId], function (err) {
    if (err) {
      return res.status(500).json({ error: 'Registration failed' });
    }
    res.status(200).json({ message: 'Successfully registered for assessment' });
  });
};

module.exports = { registerUser, loginUser, registerForAssessment };
