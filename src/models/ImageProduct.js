const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const ImageProductSchema = new Schema(
  {
    originalname: {
      type: String,
      required: true,
    },
    key: {
      type: String,
      required: true,
    },
    url: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
/*
ImageProductSchema.pre("save", function () {
  if (!this.url) {
    this.url = `${process.env.APP_URL}/files/${this.key}`;
  }
});*/

module.exports = model("ImageProduct", ImageProductSchema);
