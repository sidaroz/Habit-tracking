const User = require('../models/user');

async function createUser(req, res) {
    try {
        // const salt = await bcrypt.genSalt();
        // const hashed = await bcrypt.hash(req.body.password_set, salt)
        await User.createUser({...req.body})
        res.status(201).json({msg: 'User created!'})
    } catch (error) {
        res.status(500).json({err: 'User cannot be created'})
    }
}

module.exports = { createUser };