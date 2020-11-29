import ImageProduct from "../models/ImageProduct";
import Product from "../models/Product";

import multer from "multer";
import multerConfig from "../config/multer";

const upload = multer(multerConfig).single("image");

class ImageController {
  async store(req, res) {
    upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json("Image: Incompatible format");
      }
      const { originalname, key, location: url = ""  } = req.file;
      console.log(req.file)
      const image = await ImageProduct.create({
        originalname,
        key,
        url,
      });

      return res.status(200).json(image);
    });
  }
  async update(req, res) {
    const { id } = req.params;
    
    const { image } = await Product.findById(id);

    upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json("Image: Incompatible format");
      }
      const { originalname, key } = req.file;

      const imageUpdate = await ImageProduct.findOneAndUpdate({ _id: image }, {
        originalname,
        key
      }, {
        useFindAndModify: false,
      });

      return res.status(200).json(imageUpdate);
    });
  }
}

export default new ImageController();
