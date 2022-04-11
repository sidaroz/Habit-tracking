const db = require('../db_config/config');

class User {
    constructor(data) {
        this.username = data.username
        this.email = data.email
        this.password_set = data.password_set
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const userData = await db.query(`SELECT * FROM users;`)
                const user = userData.rows.map(u => new Users(u))
                resolve(user) 
            } catch (err) {
                reject("Error retrieving users!")
            }
        })
    }

    static createUser(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const {username, email, password_set} = data
                // console.log(data)
                let userData = await db.query(`INSERT INTO users (username, email, password_set) VALUES ($1, $2, $3) RETURNING *;`, [ username, email, password_set] )
                let user = new User(userData.rows[0])
                // console.log(user)
                resolve(user)
            } catch (err) {
                reject(`Error making user`)
                
            }

        })
    
    }

    static findByUsername (username) {
        return new Promise(async (resolve, reject) => {
            try{
                let userData = await db.query('SELECT * FROM users WHERE username = $1;', [ username ])
                let user = new User(userData.rows[0])
                resolve(user)
            } catch (err) {
                reject('Error retrieving user')
            }
        })
    }
}

module.exports = User