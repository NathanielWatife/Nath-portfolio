const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// routes
const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
