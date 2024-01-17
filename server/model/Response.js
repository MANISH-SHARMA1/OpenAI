const mongoose = require("mongoose");

const responseSchema = mongoose.Schema(
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

module.exports = mongoose.model("responseChat", responseSchema);
