import PDFKit from 'pdfkit';
import fs from 'fs';
import Product from '../models/Product';



class PDFController {
    async store(req, res) {
    try{
            const { name, _id} = req.body;
            const fetchProduct = Product.findOne({ name: name, id: _id   })
            if(!fetchProduct){
                return res.status(400).json({message:'error, validation failed. Remember: check to see if id is valid'});
            }
            
            await generatePDF(fetchProduct(name, _id));
            return res.status(200).json({message: "You sucessfully generated your pdf file"});
    }
       
    catch (err) {
        return res.status(400).json(err);
      }
    }
  }

  const generatePDF = (name, id)=> {
    
    
    const pdf = new PDFKit();
    
    pdf.text(`${id}`).image(`qrcodes/${name+id}.png`, 300, 300);

    pdf.pipe(fs.createWriteStream(`pdf/${id}.pdf`));
    pdf.end();
}


export default new PDFController;
