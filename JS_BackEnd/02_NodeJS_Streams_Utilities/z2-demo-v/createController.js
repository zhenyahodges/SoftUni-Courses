function createImage(req, res) {
    res.write('Create img');
    res.end();
}

module.exports = {
    createImage,
};
