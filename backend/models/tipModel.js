const mongoose = require("mongoose");

const tipSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    // fixture: {
    //   type: Number,
    //   required: [true, "Please add a number value"],
    // },
    // tip: {
    //   type: String,
    //   required: [true, "Please add a tip value"],
    // },
    text: {
      type: Array,
      required: [true, "Please add a tip array"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tip", tipSchema);
