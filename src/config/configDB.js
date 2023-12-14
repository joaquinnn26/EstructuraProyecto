
import mongoose from "mongoose";
import config from "./config.js";

const URI = "mongodb+srv://joaquinfefe:ecommercecoder@ecommerce.gmltjrj.mongodb.net/?retryWrites=true&w=majority";


mongoose
  .connect(URI)
  .then(() => console.log("Conectado a DB"))
  .catch((error) => console.log(error));
