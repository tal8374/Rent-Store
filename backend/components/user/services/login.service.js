const User = require("../models/user.model");

function login(payload, callback) {
    const email = payload.req.body.email;
    const password = payload.req.body.password;

    return User.UserModel
        .findOne({email: email, password: password})
        .exec()
        .then((user) => {
            payload.user = user;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

module.exports = {
    login,
};
