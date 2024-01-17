const mongoose = require("mongoose");

const userChatSchema = mongoose.Schema(
  {
    chat: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("chat", userChatSchema);
