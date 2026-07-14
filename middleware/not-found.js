const notFound = (req, res) => res.status(404).send("Route dosen't exist");

module.exports = notFound;
