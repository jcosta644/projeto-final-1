import Product from "../models/Product";
import qr from "qr-image";
import fs from "fs";
import QrcodeProduct from "../models/QrcodeProduct";

class QrcodeController {
  async show(req, res) {
    const { id } = req.params;

    try {
      const existProdutcs = await Product.find({ id: id });
    
      if (!existProdutcs) {
        return res.status(400).json({ error: "product does not exist" });
      }
  
      const qr_png = qr.image(
          `https://all-bertinho.vercel.app/product/${id}`,
          { type: "png" }
      );
      
      const qrcode = fs.createWriteStream(`tmp/qcode/${id}.png`);
  
      qr_png.pipe(qrcode);
  
      const { url } = await QrcodeProduct.create({
          filename: id,
          product: id,
      });
      
      return res.status(200).json({ url: `${url}.png`});

    }catch(err) {
      return res.status(400).json({ error: err });
    }
  }
}

export default new QrcodeController();
