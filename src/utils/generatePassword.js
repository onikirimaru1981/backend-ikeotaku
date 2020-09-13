const bcrypt = require('bcryptjs');


module.exports = async function generatePassword(rawPassword) {
    const salt = await bcrypt.genSalt(10);
    const encrypterPassword = await bcrypt.hash(rawPassword, salt);
    return encrypterPassword;
};