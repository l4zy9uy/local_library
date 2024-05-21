const express = require("express");
const {mountpath} = require("express/lib/application");
const router = express.Router();

router.get("/", (res, req, next) => {
    res.send("This is wiki's home page");
})

router.get("/about", (res, req, next) => {
    res.send("About wiki page");
})

module.exports = router;