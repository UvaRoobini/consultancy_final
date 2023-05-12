const route1 = require('express').Router()
const { default: mongoose } = require('mongoose')
const ProductModel = require('./ProductModel')
const SuccessModel = require('./SuccessModel')
route1.get("/admin/addproduct",(req,res)=>
{
    res.render('addproduct')
})    

route1.post("/createproduct",async(req,res)=>
{
    //console.log(req)
     //const product_id = req.body.product_id
     const product_name = req.body.product_name
     //const sub_category = req.body.sub_category
     const img1 = req.body.img1;
     const img2 = req.body.img2
      
     const description = req.body.description
     console.log(product_name,description)
     console.log("Details abstracted from form")
     

   
       const newItem  = new ProductModel({
        product_name:product_name,
        description : description,
        img1:img1,
        img2:img2})
     
       await newItem.save();
      
     console.log("product uploaded successfully!")
     res.redirect("/productdisplay")

    
      
   
})

route1.get("/productdisplay",async(req,res) =>
{
    const products = await ProductModel.find()
    console.log("the products are ",products)
    res.json(products)
})

route1.get("/productlist",async(req,res)=>
{
  const products = await ProductModel.find()
  res.render('list_products',{products})
})

route1.get("/deleteproduct/:_id",async(req,res)=>
{
  const product_id = req.params._id;
  console.log(product_id)
  await ProductModel.findOneAndDelete({_id : product_id})
  console.log("deleted successfully.")
  res.redirect('/productlist')
})

route1.get("/singleproduct/:_id",async(req,res)=>
{
  const product_id = req.params._id
  console.log(product_id)
  const fetchedProduct = await ProductModel.findOne({_id : product_id})
  res.json(fetchedProduct)
})
createProduct = async (req, res) => {
  const { name, description,img1,img2 } = req.body;
  try {
    const product =await  ProductModel.create({
      _id:new mongoose.Types.ObjectId(),
      product_id:Date.now(),
      product_name:name,
      description: description,
      img1,
      img2
    });
    console.log(product)
    res.status(201).json({ message: 'Product created successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error!' });
  }
};

route1.post('/product', createProduct);



createSuccess = async (req, res) => {
  console.log("sucess hit");

  const { story_name, description,img1,img2 } = req.body;
  try {
    const success =await  SuccessModel.create({
      _id:new mongoose.Types.ObjectId(),
      story_name:story_name,
      description: description,
      img1,
      img2
    });
    console.log(req.body)
    res.status(201).json({ message: 'success created successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error!' });
  }
};

route1.post('/createsuccess',createSuccess)


route1.get("/successdisplay",async(req,res) =>
{
    const success = await SuccessModel.find()
    console.log("the success stories are ",success)
    res.json(success)
})



module.exports = route1