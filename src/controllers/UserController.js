
import User from "../models/User";

import * as Yup from "yup";

class UserController {
  async store(req, res) {
    const schemaValidation = Yup.object().shape({
      name: Yup.string().required().min(3),
      email: Yup.string().required().email().min(5),
      password: Yup.string().required().min(5),
    });

    const checkSchema = await schemaValidation.isValid(req.body);

    if (!checkSchema) {
      return res.status(400).json({ error: "validations fails" });
    }

    const { name, email, password } = req.body;

    const emailExist = await User.findOne({ email });

    if (emailExist) {
      return res.status(400).json({ error: "email already exist" });
    }

    try {
      const { id } = await User.create({
        name,
        email,
        password,
      });

      return res.status(200).json({ id, name, email });
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async update(req, res) {
    const schemaValidation = Yup.object().shape({
      name: Yup.string().min(3),
      email: Yup.string().email().min(5),
      password: Yup.string().min(6),
    });

    const checkSchema = await schemaValidation.isValid(req.body);

    if (!checkSchema) {
      return res.status(400).json({ error: "validations fails" });
    }

    const emailExist = await User.findOne({ email : req.body.email });

    if (emailExist) {
      return res.status(400).json({ error: "email already exist" });
    }

    try {
      await User.findOneAndUpdate({ _id: req.user.id }, req.body, {
        useFindAndModify: false,
      });

      /*Rever qual mensagem utilizar no update*/
      return res.status(200).json(req.body);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async delete(req, res) {
    try {
      await User.findByIdAndDelete({ _id: req.user.id });

      /*Rever qual mensagem utilizar no delete*/
      return res.status(200).json({ message: "deleted user" });
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}

export default new UserController();
