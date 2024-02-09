const express = require("express");
const router = express.Router();

const { localFileUpload, imageUpload} = require("../controllers/fileUpload");
const { itemDataUpload,getAllItem } = require("../controllers/itemForm");


//api route
router.post("/localFileUpload", localFileUpload);
router.post("/imageUpload", imageUpload);

router.post("/itemDataUpload", itemDataUpload);
router.get("/getAllItem", getAllItem);

module.exports = router;