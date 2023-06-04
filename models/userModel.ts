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
  password: { type: String, required: [true, 'User must have a password'], minLength: 8 },
});

const User = models.User || model('User', userSchema);

export default User;
