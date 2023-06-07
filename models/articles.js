const { Sequelize, sequelize } = require("./db")

const article = sequelize.define("articles", {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
})

//article.sync({force: true})

module.exports = article