// create
function create(req, res) {
    res.json({ message: "You created a movie" });
}

// retrieve
function getAll(req, res) {
    res.json({ message: "You retrieved all the movies" });
};
function getById(req, res) {
    res.json({ message: `You retreived a movie by id ${req.params.id}`});
};

// update
function update(req, res) {
    res.json({ message: "You updated a movie" });
};
function updateById(req, res) {
    res.json({ message: `You updated movie id ${req.params.id}`});
};

// delete
function deletes(req, res) {
    res.json({ message: "You deleted a movie" });
};
function deleteById(req, res) {
    res.json({ message: `You deleted movie id ${req.params.id}`});
};

module.exports = {
    create,
    getAll,
    getById,
    update,
    updateById,
    deletes,
    deleteById,
}