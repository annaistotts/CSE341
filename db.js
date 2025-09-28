
const { MongoClient } = require('mongodb');

let client;
let db;

async function connectToDB(uri) {
  if (db) return db; 
  client = new MongoClient(uri);
  await client.connect();
  
  db = client.db(); 
  console.log('Connected to MongoDB:', db.databaseName);
  return db;
}

function getDB() {
  if (!db) throw new Error('DB not initialized. Call connectToDB first.');
  return db;
}

module.exports = { connectToDB, getDB };
