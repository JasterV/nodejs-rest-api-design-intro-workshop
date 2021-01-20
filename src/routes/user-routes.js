const Router = require("express").Router;
const { createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser } = require("../controllers/user-controller");

const UserRouter = Router();

UserRouter.get("/", getUsers);

UserRouter.get("/:userId", getUser);

UserRouter.post("/", createUser);

UserRouter.patch("/:userId", updateUser);

UserRouter.delete("/:userId", deleteUser);

module.exports = UserRouter;
