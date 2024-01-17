const responseChat = require("../model/Response");

const createResponseChatController = async (req, res) => {
  try {
    const { response } = req.body;

    if (!response) {
      res.send("Response Required");
    }

    const responseCreate = await responseChat.create({
      response,
    });

    res.send(responseCreate);
  } catch (error) {
    console.log(error);
  }
};

const setResponseChatController = async (req, res) => {
  try {
    const { responseData, id } = req.body;
    if (!responseData || !id) {
      res.send("require chat and id");
    }

    const responseChatData = await responseChat.findById(id);
    responseChatData.chat.push(responseData);

    await responseChatData.save();

    res.send(responseChatData.chat);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createResponseChatController, setResponseChatController };
