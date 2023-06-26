exports.modelValidator = (Model) => async (req, res, next) => {
    try {
        await Model.validate(req.body);
        next();
    } catch (err) {
        console.log(err);
        res.status(400).send(Object.values(err)[0]);
    }
};
