const db = require("../Config/db");

class User {
    static createUser(firstname, lastname, email, password, callback) {
        db.query(
            "INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)",
            [firstname, lastname, email, password],
            callback
        );
    }

    static findByEmail(email, callback) {
        db.query("SELECT * FROM users WHERE email = ?", [email], callback);
    }

    static getAllUsers(callback) {
        db.query("SELECT id, firstname, lastname, email FROM users", callback);
    }
}

module.exports = User;