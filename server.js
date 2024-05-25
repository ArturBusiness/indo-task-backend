
const express = require("express");
const connectDB = require('./db.js');
const entityModel = require('./models/entity.js')
const cors  = require('cors')

const app = express();

connectDB()
app.use(express.json())
app.use(cors())

app.get('/', async (req,res) => {
      const entities =await  entityModel.find()
      res.json(entities)
})
app.listen(3000, () => {
  console.log("app is runing");
});
