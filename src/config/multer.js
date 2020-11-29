import multer from "multer";
import { extname, resolve } from "path";
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';

const random = () => Math.floor(Math.random() * 10000 + 10000);

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, "..", "..", "tmp", "uploads"));
    },
    filename: (req, file, cb) => {
      file.key = `${Date.now()}_${random()}${extname(file.originalname)}`;
      cb(null, file.key);
    },
  }),
  s3: multerS3({
    s3: new aws.S3(),
    bucket: 'uploadsdeimagesproducts',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
        cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`);
    },
  }),
}

export default {
  fileFilter: (req, file, cb) => {
    console.log(req);
    if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
      return cb(new Error("Image: Incompatible format"));
    }

    return cb(null, true);
  },
  storage: storageTypes['s3'],
};
