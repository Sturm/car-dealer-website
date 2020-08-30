const Car = require('./../models/Car');
const slug = require('slug');

exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find();

    if (Object.keys(cars).length === 0) {
      throw new Error('Cars not found');
    }

    res.status(200).json({
      success: true,
      data: cars,
    });
  }
  catch (err) {
    res.status(400).json({
      success: false,
      msg: err.message,
    });
  }
};

exports.getCar = async (req, res) => {
  try {
    const cars = await Car.find({ slug: req.params.slug });

    if (Object.keys(cars).length === 0) {
      throw new Error('Car not found');
    }

    res.status(200).json({
      success: true,
      data: cars[0],
    });
  }
  catch (err) {
    res.status(400).json({
      success: false,
      msg: err.message,
    });
  }
};

exports.addCar = async ({ body }, res) => {
  const newCar = new Car({
    ...body,
    slug: slug(`${body.brand} ${body.model} ${body.year} ${Math.floor(Math.random() * 10)}`),
  });

  newCar.save().then(car => {
    console.log(`Saved new Car to database! [${car.name}]`);
    res.status(200).json({
      success: true,
      saved: true,
    })
  });
};