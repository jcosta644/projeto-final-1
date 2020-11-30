const { Schema, model } = require("mongoose");

const QrcodeProductSchema = new Schema(
  {
    filename: {
      type: String,
      required: true,
    },
    /*** criar uma outra url pra dizer p onde o qrcode direciona??? */
    url: {
      type: String,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);

QrcodeProductSchema.pre("save", function () {
  if (!this.url) {
    this.url = `${process.env.APP_URL}qrcode/${this.product}`;
  }
});

module.exports = model("QrcodeProduct", QrcodeProductSchema);
