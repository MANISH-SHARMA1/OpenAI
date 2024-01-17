const router = require("express").Router();
const chatRouter = require("../controller/chatController");

router.post("/", chatRouter.setChatController);
router.get("/", chatRouter.getChatController);

module.exports = router;
