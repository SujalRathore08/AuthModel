// config/db.js
const mongoose = require('mongoose');

const dbURI = 'mongodb://<username>:<password>@<ip-address>:<port>/<database-name>?authSource=admin';

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
