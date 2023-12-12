const User = require("../models/userModel2");

// const getUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const getUsers = async (req, res) => {
  try {
    const filter = {};
    if (req.query.name) {
      // filter.name = req.query.name;
      filter.name = new RegExp(req.query.name, "i");
    }
    if (req.query.age) {
      filter.age = req.query.age;
    }
    if (req.query.city) {
      // filter.city = req.query.city;
      filter.city = new RegExp(req.query.city, "i");
    }

    const users = await User.find(filter);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUsers = async (req, res) => {
  try {
    const users = await User.insertMany(req.body);
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOptions = async (req, res) => {
  try {
    const ageOptions = await User.find().distinct("age");
    const cityOptions = await User.find().distinct("city");
    res.json({ ages: ageOptions, cities: cityOptions });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUsers, createUsers, getOptions };
