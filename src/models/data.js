const conn = require('../config/db')

module.exports = {
    createData: (name, positon, department, id_user) => {
        return new Promise((resolve, reject) => {
            conn.query(`INSERT INTO data SET name = ?, position = ?, department = ?, id_user = ?`, [name, positon, department, id_user], (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    },
    readData: (id) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM data WHERE id_user = ?`, id, (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    },
    updateData: (name, positon, department, id_user, id) => {
        return new Promise ((resolve, reject) => {
            conn.query(`UPDATE data SET name = ?, position = ?, department = ? WHERE id_user = ? AND id = ?`, [name, positon, department, id_user, id], (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    },
    deleteData: (id) => {
        return new Promise ((resolve, reject) => {
            conn.query(`DELETE FROM data WHERE id = ?`, id, (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    }
}