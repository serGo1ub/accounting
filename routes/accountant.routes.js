const Router = require('express');
const router  = new Router();
const accountantController = require('../controller/accountant.controller');

router.post('/accountant', accountantController.creatAccountant);
router.get('/accountant', accountantController.getAccountants);
router.get('/accountant/:id', accountantController.getOneAccountant);
router.put('/accountant/', accountantController.updateAccountant);
router.delete('/accountant/:id', accountantController.deleteAccountant);

module.exports = router;
