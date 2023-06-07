// Third-party imports
import { Schema, model, models } from 'mongoose';
import isEmail from 'validator/lib/isEmail';

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'User must have an email'],
    unique: true,
    validator: [isEmail, 'Please provide valid email address'],
  },
  username: { type: String, required: [true, 'User must have an username'], unique: true, minLength: 5 },
  name: { type: String, required: [true, 'User must have a name'] },
  password: { type: String, minLength: 8 },
  image: { type: String },
});

const User = models.User || model('User', userSchema);

export default User;
