const express = require("express");
const routes = express.Router();

const User = require("./controllers/UsersPost");

routes.get("/users", User.Users);
routes.get("/posts/:id", User.Posts);

module.exports = routes;
