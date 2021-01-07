import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}.${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(req, file, cb) {
  const fileTypes = /jpg|jpeg|png/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);

  if (extname && mimeType) {
    return cb(null, true);
  } else {
    req.fileValidationError = 'Images only!';
    cb(null, false, req.fileValidationError);
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(req, file, cb);
  },
});

router.post('/', upload.single('image'), (req, res) => {
  console.log('req', req);
  if (req.fileValidationError) {
    res.status(500);
    res.send(req.fileValidationError);
  }
  res.send(`/${req.file.path.replace(/\\/g, '/')}`);
});

export default router;
