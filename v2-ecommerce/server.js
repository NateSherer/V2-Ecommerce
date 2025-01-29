import express from "express";
import mysql2 from "mysql2";
// Cors allows us to create cross request
import cors from "cors";

// Load environment variables from .env file

const app = express();
app.use(cors());
const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ThriftTech",
});

connection.connect((err) => {
  if (err) {
    console.log("Error connectiong to the databse");
  } else {
    console.log("connected to the databse");
  }
});

// Creating our conection for when we fetch our data
// A file path for requesting the data
app.get("/api/products", (req, res) => {
  const query = "SELECT * FROM Products";

  connection.query(query, (err, results) => {
    if (err) {
      console.log("Error geting products");
      res.status(500).send("Error retrieving products");
    } else {
      res.json(results);
    }
  });
});

app.listen(3305, () => {
  console.log(`Server is running on port 3305`);
});
