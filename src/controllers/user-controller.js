const db = require("../models");

async function getUsers(req, res, next) {
    try {
        const users = await db.User
            .find({})
            .lean()
            .exec();
        res.send({
            data: users
        });
    } catch (err) {
        next(err);
    }
}


async function getUser(req, res, next) {
    try {
        const { userId } = req.params;
        const user = await db.User
            .findById(userId)
            .lean()
            .exec();
        res.send({
            data: user
        });
    } catch (err) {
        next(err);
    }
}

async function createUser(req, res, next) {
    try {
        const { ...userData } = req.body;
        const user = await db.User.create(userData);
        res.status(201).send({
            data: user._id
        });
    } catch (err) {
        next(err);
    }
}

async function updateUser(req, res, next) {
    try {
        const { userId } = req.params;
        const { ...newData } = req.body;
        const user = await db.User
            .findOneAndUpdate(userId, {
                $set: newData,
            }, {
                new: true
            })
            .lean()
            .exec();

        res.send({
            data: user
        });

    } catch (err) {
        next(err);
    }
}

async function deleteUser(req, res, next) {
    try {
        const { userId } = req.params;
        const user = await db.User
            .findByIdAndDelete(userId)
            .lean()
            .exec();
            
        res.send({
            data: {
                _id: user._id
            }
        })
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getUser,
    getUsers,
    createUser,
    deleteUser,
    updateUser
};
