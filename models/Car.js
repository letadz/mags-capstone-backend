const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const carSchema = new mongoose.Schema(
  {
    car_brand: {
      type: String,
      required: true,
    },
    car_model: {
      type: String,
      required: true,
    },
    car_year: {
      type: Date,
      required: true,
    },
    car_variant: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png",
      trim: true,
    },
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    repairHistory: [
      {
        history: {
          type: ObjectId,
          ref: "History",
        },
        savedAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", carSchema);
