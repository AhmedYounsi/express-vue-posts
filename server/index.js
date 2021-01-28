const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./database/connection')
const route = require('./routes/router')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()


const PORT = process.env.PORT || 5000

// body parser
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

// CORS
app.use(cors())

connectDB()

// include routers
app.use('/api',route)

// handle prod
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(__dirname + '/public/'))

	app.get(/.*/,(req,res)=>{
		res.sendFile(__dirname + '/public/index.html')
	})
}

app.listen(PORT,()=>{
	console.log('server is running');
})