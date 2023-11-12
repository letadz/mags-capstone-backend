const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const historySchema = new mongoose.Schema(
  {
    date_book: {
      type: Date,
      required: true,
    },
    preferred_time: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    mileAge: {
      type: Number,
      required: true,
    },
    book_notes: {
      type: String,
    },
    car: {
      type: ObjectId,
      ref: "Car",
      required: true,
    },
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("History", historySchema);
