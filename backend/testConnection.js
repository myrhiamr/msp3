const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin:admin@cluster0.65ydf3n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connection successful');
  mongoose.connection.close();
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});




