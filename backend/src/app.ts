require('module-alias/register')
import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import session from 'express-session'

const app: express.Application = express()

app.set('port', process.env.PORT || 6063)
// views engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('views engine', 'jade')

app.use(logger('dev'))
app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ limit: '5mb', extended: true }))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

app.use(
  session({
    secret: 'appServer', // 设置签名
    cookie: { maxAge: 60 * 1000 * 60 * 24 * 3 },
    resave: true, //强制保存，如果session没有被修改也要重新保存
    saveUninitialized: false,  //如果原先没有session那么久设置，否则不设置
  })
)

try {
  // 注册路由
} catch(e) {
  console.log(e)
}

app.use(function(req, res, next) {
  next(createError(404))
})

app.use(function (
  err: { message: any; status: any },
  req: { app: { get: (arg0: string) => string } },
  res: {
    locals: { message: any; error: any }
    status: (arg0: any) => void
    render: (arg0: string) => void
  },
  next: any
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

const http = require('http').Server(app)

http.listen(app.get('port'), '0.0.0.0', function () {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app
