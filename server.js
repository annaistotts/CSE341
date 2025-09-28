require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectToDB } = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Server up' });
});

const contactsRoutes = require('./routes/contacts');
app.use('/contacts', contactsRoutes);

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await connectToDB(process.env.MONGODB_URI);
    app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
})();