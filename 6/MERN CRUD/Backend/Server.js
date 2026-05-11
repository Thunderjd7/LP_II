const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

/* Middleware */

app.use(cors());
app.use(express.json());

/* MongoDB Connection */

mongoose.connect('mongodb://127.0.0.1:27017/studentDB')

.then(() => {
  console.log('MongoDB Connected');
})

.catch((err) => {
  console.log(err);
});

/* Schema */

const UserSchema = new mongoose.Schema({

  name: String,
  email: String

});

/* Model */

const User = mongoose.model('User', UserSchema);

/* INSERT API */

app.post('/addUser', async (req, res) => {

  try {

    const user = new User(req.body);

    await user.save();

    res.send(user);

  }

  catch(err) {

    res.send(err);

  }

});

/* GET API */

app.get('/users', async (req, res) => {

  try {

    const users = await User.find();

    res.send(users);

  }

  catch(err) {

    res.send(err);

  }

});

/* UPDATE API */

app.put('/updateUser/:id', async (req, res) => {

  try {

    const updatedUser = await User.findByIdAndUpdate(

      req.params.id,
      req.body,
      { new: true }

    );

    res.send(updatedUser);

  }

  catch(err) {

    res.send(err);

  }

});

/* Server */

app.listen(5000, () => {

  console.log('Server Running on Port 5000');

});