const express = require('express')
const hbs  = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000

app.engine('handlebars', hbs.engine({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')

const fortunes = [
    'Победи своите страхове или те ще победят теб.',
    'На реките са нужни източници',
    'Не се страхувай от непознатото'
]


app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    res.render('about', {fortune: randomFortune})
})

app.use((req, res) => {
    res.status('404')
    res.render('404')
})

app.use((err, req, res, next) => {
    console.error(err.message)
    res.status('500')
    res.render('500')
})

app.listen(port, () => {
    console.log(`Express started on http://localhost:${port} press CTRL + C to cancel app`)
})