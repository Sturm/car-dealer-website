const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    enum: ['BMW', 'Mercedes Benz', 'Audi'],
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  year: {
    type: Number,
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  horsePower: {
    type: Number,
    required: true,
  },
  engineSize: {
    type: Number,
    required: true,
  },
  sold: {
    type: Boolean,
    default: false,
  },
  gearType: {
    type: String,
    enum: ['manualna', 'automatyczna'],
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  description: {
    type: String,
    required: true,
    default: '',
  }
});

module.exports = Item = mongoose.model('car', CarSchema);