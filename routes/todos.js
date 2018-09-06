var express = require("express");
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/todos");

//
// ─── INDEX & POST TODOS ROUTE ───────────────────────────────────────────────────────
//

router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo)

//
// ─── GET, UPDATE and DELETE SINGLE TODO ROUTE ──────────────────────────────────────────────────────────────────
//

router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)

module.exports = router;