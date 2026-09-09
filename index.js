// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const Student = require('./models/Student');

// const app = express();
// app.use(cors());

// mongoose.connect('mongodb://localhost:27017/bqAcademy')
//   .then(() => console.log('MongoDB Connected'))
//   .catch((err) => console.log(err));

// app.get('/api/students', async (req, res) => {
//   try {
//     const students = await Student.find();
//     res.json(students);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(Server running on port ${PORT}));
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Student = require('./models/Student');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Body data receive karne ke liye zaroori hai

// Database Connection
mongoose.connect('mongodb://localhost:27017/bqAcademy')
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// Routes
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Server Listen (Fixed Backticks Here)
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));