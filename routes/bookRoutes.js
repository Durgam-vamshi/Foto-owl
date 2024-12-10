const express = require('express');
const { getAllBooks, createBorrowRequest } = require('../controllers/bookController.js');
const { authenticateJWT } = require('../utils/authMiddleware.js');

const router = express.Router();

router.get('/', getAllBooks);

router.post('/borrow', authenticateJWT, createBorrowRequest);

module.exports = router;
