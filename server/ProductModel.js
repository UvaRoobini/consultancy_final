const mongoose = require("mongoose")
// "id": 2,
//       "name": "Solar Panel Type B",
//       "desc": "Or neglected agreeable of discovery concluded oh it sportsman. Week to time in john. Son elegance use weddings separate. Ask too matter formed county wicket oppose talent. He immediate sometimes or to dependent in. Everything few frequently discretion surrounded did simplicity decisively. Less he year do with no sure loud.",
//       "small": "https://www.lightinus.com/wp-content/uploads/2019/05/Solar-Panels-Lightinus.jpg",
//       "large": "https://www.lightinus.com/wp-content/uploads/2019/05/Solar-Panels-Lightinus.jpg"
const ProductModel = new mongoose.Schema(
    {
        // _id: {
        //     type: mongoose.Types.ObjectId,
        //   },
      //  product_id : {type : String },
        product_name : {type : String},
        sub_category1 : {type : String},
        img1 : {type : String},
        img2 : {type : String},
        description : {type : String},
    }
)
module.exports = mongoose.model("products",ProductModel);