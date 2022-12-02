const db = require('../db');
class ReportController {

    async createReport(req, res){
        const {title, content, accountant_id} = req.body;
        const newPost = await db.query(
            `INSERT INTO report (title, content, accountant_id) VALUES ($1, $2, $3) RETURNING *`, [title,content, accountant_id]
        );
        res.json(newPost.rows[0]);

    }

    async getReportsByUser (req, res){
        const {id} = req.query;
        const getReports = await db.query(`SELECT title, content FROM report WHERE accountant_id=$1`, [id]);
        res.json(getReports.rows);

    }

}

module.exports = new ReportController();
