
const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {

res.json({

status: "API REST funcionando"

});

})

module.exports = router;