const fs = require('fs');

function authenticate(login, senha) {
    var users = JSON.parse(fs.readFileSync('users', 'utf8'));
    const user = users.find(u => u.user === login);
    if(user && user.password === senha) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = authenticate;