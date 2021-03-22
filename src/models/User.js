const bcrypt = require('bcrypt');
const db = require('../db');

//add find previous user with username
verifyCredentials = async (username,password) => {
    const user = await db('users').where('username', username);
    if(user.length>0){
        return false;
    }

    if(username.length > 0 && password.length>0){
        return true;
    }
    else return false;
}

module.exports = {
    getById : async (id) => {
        var user = await db('users').where('id', id);
        return user[0];
    },

    signup : async(username,password) => {
        validUser = await verifyCredentials(username, password);
        if(validUser == false){
            return {message : 'Invalid User Credentials'}
        }
        try {
            var salt = await bcrypt.genSalt(10);
            var hashedPassword = await bcrypt.hash(password, salt);
            const user = await db('users').insert({username, password : hashedPassword}).returning('*');
            return user[0];
        }
        catch(err) {
            console.log(err);
            return err;
        }
    },

    getNumberLiked : async(id) => {
        var liked = await db.raw('SELECT COUNT(*) FROM likes WHERE user_id = ?', [id]);
        return liked[0];
    }
}