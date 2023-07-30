function hasUser() {
    return (req, res, next) => {
        if (req.user != undefined) {
            next();
        } else {
            res.redirect('/auth/login');
        }
    };
}

function isGuest() {
    return (req, res, next) => {
        if (req.user != undefined) {
            next();
        } else {
            res.redirect('/');
        }
    };
}

function hasRole() {
    return (req, res, next) => {
        if (req.user == undefined || req.user.roles.includes(role) == false) {
            res.redirect('/login');
        } else {
            next();
        }
    };
}

module.exports = {
    hasUser,
    isGuest,
};
