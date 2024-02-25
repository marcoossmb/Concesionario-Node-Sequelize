const express = require("express");
const app = express();
const bodyParse = require("body-parser")

const sequelize = require("./database/db");

require("./database/associations")

app.use(express.json())
app.use(bodyParse.urlencoded({ extended: true }))

const router = require("./routes/approutes");
app.use("/concesionario", router)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escucahndo en puerto ${PORT} 😎`)

    sequelize
        .sync({ force: false })
        .then(() => console.log("Tablas sincronizadas"))

})