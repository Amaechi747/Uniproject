const Property = require("mongoose");

const propertySchema = new Property.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: [String],
  description: {
    type: String,
    required: true,
  },
});

const Properties = Property.model("Properties", propertySchema);

export { Properties };
