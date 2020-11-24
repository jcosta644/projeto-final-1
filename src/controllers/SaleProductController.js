import SaleProduct from "../models/SaleProduct";
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

    try {
        const sale = await SaleProduct.create({
            product,
            user
        });

        return res.status(200).json(sale);
    } catch (err) {
        return res.status(400).json(err);
    }
  }
}

export default new SaleProductController();
