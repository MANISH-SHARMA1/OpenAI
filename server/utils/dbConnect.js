const mongoose = require("mongoose");
const { ServerApiVersion } = require("mongodb");
// 86616IyhoYnOpPw6
module.exports = async () => {
  let mongoUri =
    "mongodb+srv://dineshsharma2181971:86616IyhoYnOpPw6@cluster0.zlsrpc0.mongodb.net/?retryWrites=true&w=majority";

  try {
    const connect = await mongoose.connect(mongoUri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.log( error);
    process.exit(1);
  }
};
