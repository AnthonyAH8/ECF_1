const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const User = require('../models/users');

exports.create = async (req, res) => {
  try {
    const { firstname, lastname, username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      firstname,
      lastname,
      email,
      username,
      password: hashedPassword,
    });
    res.status(201).json({ message: "Utilisateur créé avec succès" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la création de l'utilisateur" });
  }
};

exports.login = async (req, res) => {
  try {
    const { userId, password } = req.body;
    const user  = await User.findOne({ _id: userId });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Utilisateur ou mot de passe incorrect" });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res
        .status(401).json({ message: "Utilisateur ou mot de passe incorrect" });
    }

    const token = jwt.sign({ userId: user.id }, "RANDOM_TOKEN_SECRET", {
      expiresIn: "2d",
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.profile = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json("Utilisateur inconnu");
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
