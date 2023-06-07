sequelize.authenticate()
    .then(() => {
        console.log("Successfully connected to DB")
    })
    .catch(err => {
        console.log("Fail to connect to DB due to: " + err)
    })

const article = sequelize.define("article", {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
})

//article.sync({force: true})

const user = sequelize.define('users', {
    name: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    userName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
})

//user.sync({force: true})

/*article.create({
    title: "Teste",
    content: "Lorem ipsum bla bla bla"
})*/

user.create({
    name: "Felipe",
    lastName: "Goertmann",
    userName: "Feumann",
    email: "test.test@test.com"
})