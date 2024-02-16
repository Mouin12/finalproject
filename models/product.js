const mongoose = require("mongoose");

const schema = mongoose.Schema;

const productschema = new schema({
  name: {
    type: String,
    
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
   
  },
  description: {
    type: String,
  },
});

module.exports = product = mongoose.model("produit", productschema);
