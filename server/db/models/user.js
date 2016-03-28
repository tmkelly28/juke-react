'use strict';

const crypto = require('crypto'),
  mongoose = require('mongoose');

const schema = new mongoose.Schema({
  email: { type: String },
  username: { type: String },
  password: { type: String },
  salt: { type: String },
  twitter: {
    id: String,
    username: String,
    token: String,
    tokenSecret: String
  },
  facebook: { id: String },
  google: { id: String }
});

function generateSalt () {
  return crypto.randomBytes(16).toString('base64');
};

function encryptPassword (plainText, salt) {
    let hash = crypto.createHash('sha1');
    hash.update(plainText);
    hash.update(salt);
    return hash.digest('hex');
};

schema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.salt = this.constructor.generateSalt();
    this.password = this.constructor.encryptPassword(this.password, this.salt);
  }
  next();
});

schema.statics.generateSalt = generateSalt;
schema.statics.encryptPassword = encryptPassword;

schema.method('correctPassword', function (candidatePassword) {
  return encryptPassword(candidatePassword, this.salt) === this.password;
});

mongoose.model('User', schema);
