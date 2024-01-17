const router = require("express").Router();
const responseChat = require("../controller/responseCotroller");

router.post("/", responseChat.setResponseChatController);
router.post("/create", responseChat.createResponseChatController);

module.exports = router;
