import SaleProduct from "../models/SaleProduct";
import Product from "../models/Product";
import * as Yup from "yup";

class SaleProductController {
  async store(req, res) {
    const SchemaValidation = Yup.object.shape({
      product: Yup.string().required(),
    });

    const user = req.user.id;

    const checkSchema = await schemaValidation.isValid(req.body);

    if (!checkSchema) {
      return res.status(400).json({ error: "validations fails" });
    }

    const sold = await Product.findOne({ _id: product }).sold;

    if (sold) {
      return res.status(400).json({ error: "product already sold" });
    }

    await Product.findByIdAndUpdate({ _id: product }, { sold: true });

    try {
      const sale = await SaleProduct.create({
        product,
        user,
      });

      return res.status(200).json(sale);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}

export default new SaleProductController();
