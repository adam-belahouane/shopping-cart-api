import models from "../../db/models/index.js";

const { User, Review } = models;

const getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: Review,
    });
    res.send(users);
  } catch (error) {
    next(error);
  }
};

const createNewUser = async (req, res, next) => {
  try {
    const data = await User.create(req.body);
    res.send(data);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(user);
  } catch (error) {
    next(error);
  }
};

const editUser = async (req, res, next) => {
  try {
    const updatedUser = await User.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
        returning: true,
      }
    );
    res.send(updatedUser[1][0]);
  } catch (error) {
    next(error);
  }
};

const deletetUserById = async (req, res, next) => {
  try {
    const rows = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send({ rows });
  } catch (error) {
    next(error);
  }
};

const userHandlers = {
  getUsers,
  createNewUser,
  getUserById,
  editUser,
  deletetUserById,
};

export default userHandlers;
