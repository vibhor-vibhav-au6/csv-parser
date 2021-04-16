import express from "express";
const app = express();
const port = 3000;
import csvStream from "./parser.js";

app.get("/", (req, res) => {
    const results = csvStream()
    // console.log(results)
    // res.send(results);
  
  console.log('pre-result')
  res.send(results)
  

    
    });

    app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
    });
