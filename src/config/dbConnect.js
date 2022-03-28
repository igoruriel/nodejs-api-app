import mongoose from "mongoose";

mongoose.connect("mongodb+srv://igoruriel:A29UJAowV7g01ryp@node-express-alura.op7ri.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;