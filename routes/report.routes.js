const Router = require('express');
const router = new Router;
const ReportController  = require('../controller/report.controller');

router.post('/report', ReportController.createReport);
router.get('/report', ReportController.getReportsByUser);

module.exports = router;
