
// const express = require("express");
// const connectDB = require('./db.js');
// const entityModel = require('./models/entity.js')
// const cors  = require('cors')

// const app = express();

// connectDB()
// app.use(express.json())
// app.use(cors())

// app.get('/', async (req,res) => {
//       const entities = await  entityModel.find()
//       res.json(entities)
// })

// app.delete(`:/id`,async (req,res) => {
//     try{
//         const id = req.params;
//         const response = await entityModel.deleteOne({_id: id});


//     }catch(err){
//         console.error(err.message,"Deleting failed with status code:" ,err.status)
//     }
// })

// app.listen(3000, () => {
//   console.log("app is runing");
// });

const express = require("express");
const connectDB = require('./db.js');
const entityModel = require('./models/entity.js');
const cors = require('cors');

const app = express();

connectDB();
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
  try {
    const entities = await entityModel.find();
    res.json(entities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching entities", error });
  }
});

app.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await entityModel.deleteOne({ _id: id });

    if (response.deletedCount > 0) {
      res.json({ message: "Entity deleted successfully" });
    } else {
      res.status(404).json({ message: "Entity not found" });
    }
  } catch (err) {
    console.error(err.message, "Deleting failed with status code:", err.status);
    res.status(500).json({ message: "Error deleting entity", error: err.message });
  }
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
