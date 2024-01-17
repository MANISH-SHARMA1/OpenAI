const Chat = require("../model/Chat");

const setChatController = async (req, res) => {
  try {
    const { chatString, id } = req.body;

    if (!chatString || !id) {
      res.send("require chat and id");
    }

    const userChat = await Chat.findById(id);

    console.log(userChat.chat.push(chatString));

    const ret = await userChat.save();

    res.send(ret);
  } catch (error) {
    console.log(error);
  }
};

const getChatController = async (req, res) => {
  const { id } = req.body;
  console.log("id: ", id);
  const userChat = await Chat.findById(id);
  console.log("userChat: ", userChat);
  const chatArray = userChat.chat;
  res.send(chatArray);
};

module.exports = { setChatController, getChatController };
