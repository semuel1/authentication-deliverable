const express = require('express')
const app = express()
const rowdy = require('rowdy-logger')
const cookieParser = require('cookie-parser')


const models = require('./models')

// middleware
const rowdyRes = rowdy.begin(app)
app.use(require('morgan')('tiny'))
app.set('view engine', 'ejs')
app.use(require('express-ejs-layouts'))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(async (req, res,  next) => {
  const user = await models.user.findbyPK(req.cookies.userId)

  res.locals.user = user
  next()
})


app.use('/user', require('./controllers/userController'))
// routes
app.get('/', (req, res) => {
  res.render('index')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('server started!');
  rowdyRes.print()
})