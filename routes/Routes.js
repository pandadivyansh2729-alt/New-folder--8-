const express = require("express");
const Router = express.Router();
const User = require("../model/user");

// Health Check
Router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "User API is working"
    });
});

// =======================
// CREATE USER
// =======================
Router.post("/users", async (req, res) => {
    try {
        const { name, age } = req.body;

        if (!name || age === undefined) {
            return res.status(400).json({
                success: false,
                message: "Name and Age are required."
            });
        }

        const user = await User.create({
            name,
            age,
        });

        res.status(201).json({
            success: true,
            message: "User created successfully.",
            data: user,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// =======================
// GET ALL USERS
// =======================
Router.get("/users", async (req, res) => {
    try {

        const users = await User.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: users.length,
            data: users,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// =======================
// GET SINGLE USER
// =======================
Router.get("/users/:id", async (req, res) => {
    try {

        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found.",
            });
        }

        res.status(200).json({
            success: true,
            data: user,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// =======================
// UPDATE USER
// =======================
Router.put("/users/:id", async (req, res) => {
    try {

        const { name, age } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                name,
                age,
            },
            {
                new: true,
                runValidators: true,
            }
        );

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found.",
            });
        }

        res.status(200).json({
            success: true,
            message: "User updated successfully.",
            data: updatedUser,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// =======================
// DELETE USER
// =======================
Router.delete("/users/:id", async (req, res) => {
    try {

        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found.",
            });
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully.",
            data: deletedUser,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

module.exports = Router;