const conn = require('../config/db')

module.exports = {
    createUser: (username, password) => {
        return new Promise((resolve, reject) => {
            conn.query(`INSERT INTO auth SET username = ?, password = ?`, [username, password], (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    },
    readUser: (id) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM auth WHERE id = ?`, id, (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    },
    getStatusToken: (token) => {
        return new Promise ((resolve, reject) => {
            conn.query(`SELECT * FROM auth WHERE token = ?`, token, (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    },
    getVerify: (username, password) => {
        return new Promise ((resolve, reject) => {
            conn.query(`SELECT * FROM auth WHERE username = ? AND password = ?`, [username, password], (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    },
    updateUser: (username, password, token, id) => {
        return new Promise ((resolve, reject) => {
            conn.query(`UPDATE auth SET username = ?, password = ?, token = ? WHERE id = ?`, [username, password, token, id], (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    },
    deleteUser: (id) => {
        return new Promise ((resolve, reject) => {
            conn.query(`DELETE FROM auth WHERE id = ?`, id, (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    }
}