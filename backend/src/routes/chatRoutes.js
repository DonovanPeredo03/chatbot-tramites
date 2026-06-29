const express = require('express');

const multer = require('multer');

const upload = multer({
    dest: 'uploads/'
});

const router = express.Router();

const {
    enviarMensaje
} = require('../controllers/chatController');

router.post('/', upload.single('archivo'), enviarMensaje);

module.exports = router;