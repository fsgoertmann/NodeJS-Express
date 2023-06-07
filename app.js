const express = require("express")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")

const articles = require("./models/articles")

const app = express()

//Config
    //Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout:'main'}))
    app.set('view engine', 'handlebars')

    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

//Rotas
    app.get('/', (req, res) => {
        res.render('home')
    })

    app.get('/cad', (req, res) => {
        res.render('formulario')
    })

    app.post('/addArticle', (req, res) => {
        articles.create({
            title: req.body.title,
            content: req.body.content
        }).then(() => {
            res.redirect('/')
        }).catch(err => {
            res.send("Failed to create the article. Error: " + err)
        })
    })

app.listen(3031, () => {
    console.log("Server UP!!!")
})