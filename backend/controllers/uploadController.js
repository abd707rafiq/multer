
const File = require('../models/File');


const uploadFile = async (req, res) => {
  try {
    
    const newFile = new File({
      filename: req.file.originalname,
      path: req.file.path,
      
      
    });
    

    await newFile.save();

    res.json({ message: 'File uploaded successfully!', file: newFile });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { uploadFile };
