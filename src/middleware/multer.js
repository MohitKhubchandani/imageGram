import multer from 'multer';
import path from 'path';

// Storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // Get the file extension (e.g., .jpg, .png)
    cb(null, Date.now() + ext); // Save the file with a timestamp and original extension
  }
});

// Multer upload configuration
const upload = multer({ storage });

export default upload;
