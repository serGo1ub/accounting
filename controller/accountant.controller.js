const db = require('../db')

class AccountantController {
    async creatAccountant(req, res){
        const {name, surname} = req.body;
        const newAccountant = await db.query(`INSERT INTO accountant (name, surname) VALUES ($1, $2) RETURNING *`, [name, surname]);
        res.json(newAccountant.rows[0]);
    }

    async getAccountants(req, res){
        const users = await db.query(`SELECT * FROM accountant`);
        res.json(users.rows);
    }

    async getOneAccountant(req, res){
        const id = req.params.id;
        const accountant = await db.query(`SELECT * FROM accountant WHERE id=$1`, [id]);
        res.json(accountant.rows[0]);
    }

    async updateAccountant(req, res){
        const {id, name, surname} = req.body;
        const accountant = await db.query(
            `UPDATE accountant SET name= $1, surname=$2 WHERE id = $3 RETURNING *`, [name, surname, id]
        );
        res.json(accountant.rows[0]);
    }

    async deleteAccountant(req, res){
        const id = req.params.id;
        const accountant = await db.query(`DELETE FROM accountant WHERE id=$1`, [id]);
        res.json(accountant.rows[0]);
    }
}

module.exports = new AccountantController()
