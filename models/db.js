//Conexão com o banco de dados MySql
const Sequelize = require("sequelize")
const sequelize = new Sequelize("mrproject", "root", "admin123", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}