'use strict';

const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = yaml.load(fs.readFileSync(path.join(__dirname, '/../api/swagger.yaml'), 'utf8'));

router.use('/docs', swaggerUi.serve);
router.get('/docs', swaggerUi.setup(swaggerDocument));

module.exports = router;
