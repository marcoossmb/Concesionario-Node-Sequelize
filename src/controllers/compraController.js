const compraservice = require("../services/compraServices");

const getAll = async (req, res) => {
     const all = await compraservice.getAll()
    res.json(all)
}

module.exports = {
    getAll
}