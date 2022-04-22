import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://vini:123@node-cluster.xyldt.mongodb.net/node-express');

let db = mongoose.connection;

export default db;