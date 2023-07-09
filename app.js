const express = require('express')
const morgan = require('morgan')
const app = express()
const { Cors } = require('./middlewares/cors')

app.use(Cors);

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

app.use('/api/v1/Bals', require('./routes/bal.routes'))
app.use('/api/v1/clients', require('./routes/client.routes'))
app.use('/api/v1/txns', require('./routes/txn.routes'))
app.use('/api/v1/users', require('./routes/user.routes'))
app.use('/api/v1/roles', require('./routes/role.routes'))
app.use('/api/v1/auth', require('./routes/auth.routes'))
app.use('/api/v1/sms', require('./routes/sms.routes'))
app.use('/api/v1/utils', require('./routes/util.routes'))
app.use('/api/v1/schools', require('./routes/school.routes'))
app.use('/api/v1/students', require('./routes/student.routes'))
app.use('/api/v1/fees', require('./routes/sfee.routes'))

app.get('/', (req,res)=>{
  res.json({msg: 'Unauthorized path!!'})
})

module.exports=app