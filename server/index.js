const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PORT = 1010
const DB_URL= "mongodb+srv://mi7layp4g:cavidan21@cluster0.ob0zcy9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const ProductSchema = new Schema({
    title: { type: String, require:true },
    price: { type: Number,require: true },
    image: { type: String, require: true},
  });

  const ProductModel = mongoose.mongoose.model('ProductModel', ProductSchema);

app.get('/api/products', async (req,res)=>{
    const products= await ProductModel.find({})
    try {
        if (products.length>0) {
            res.status(200).send({message: "successful",data:products})
        } else {
            res.status(204).send({message:"empty data",data:null})            
        }
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})
app.post('/api/products', async (req,res)=>{
  const products= new ProductModel.find({})
  
  try {
    
  } catch (error) {
    res.status(500).send({message: error.message})
  }
})
app.get('/api/products/:id', async (req,res)=>{
  const {id} = req.params
  try {
    const products= await ProductModel.find({})

    if (products) {
      
    } else {
      
    }
  } catch (error) {
    res.status(500).send({message: error.message})
  }
})
app.delete('/api/products/:id', async (req,res)=>{
  const {id} = req.params
  try {
    const products= ProductModel.findByIdAndDelete(id)
    res.status(204).send({message: "deleted one", })
  } catch (error) {
    res.status(500).send({message: error.message})
  }

})



mongoose.connect(DB_URL)
  .then(() => {console.log('Connected!') ;
  app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}, base url is http://localhost:${PORT}`)}
  )}
);
 