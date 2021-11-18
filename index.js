const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
require('dotenv').config()

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//get all fams

app.get("/families", async (req, res) => {
  try {
    const allFamilies = await pool.query("SELECT * FROM families");
    res.json(allFamilies.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a test

app.get("/tests/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const test = await pool.query("SELECT * FROM tests WHERE id = $1", [
      id
    ]);
    res.json(test.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get attempts for that test for a certain user
//not quite right

app.get("/attempts", async (req, res) => {
  try {
    const allAttempts = await pool.query("SELECT * FROM attempts");
    res.json(allAttempts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//create a user



//create a new family

// {
//   "mod": 2,
//   "name": "burp",
//   "dataset": ["blah"]
// }

app.post("/families", async (req, res) => {
  try {
    const { mod, name, dataset } = req.body;
    const newFamily = await pool.query(
      "INSERT INTO families (mod, name, dataset) VALUES($1, $2, $3) RETURNING *",
      [mod, name, dataset]
    );
    res.json(newFamily.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//create a new test

// {
//   "description": "kill them all",
//   "expected": "shit",
//   "methods": ["reduce"],
//   "family": 2
// }

app.post("/tests", async (req, res) => {
  try {
    const { description, expected, methods, family } = req.body;
    const newTest = await pool.query(
      "INSERT INTO tests (description, expected, methods, family) VALUES($1, $2, $3, $4) RETURNING *",
      [description, expected, methods, family]
    );
    res.json(newTest.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//create a new attempt

// {
//   "passing": false,
//   "code": "dumb",
//   "output": "dumber",
//   "user_id": 666,
//   "test_id": 666
// }

app.post("/attempts", async (req, res) => {
  try {
    const { passing, code, output, user_id, test_id } = req.body;
    const newAttempt = await pool.query(
      "INSERT INTO attempts (passing, code, output, user_id, test_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [passing, code, output, user_id, test_id]
    );
    res.json(newAttempt.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update an attempt

// {
//   "passing": true,
//   "code": "better",
//   "output": "good"
// }

app.put("/attempts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { passing, code, output } = req.body;
    const updateAttempt = await pool.query(
      "UPDATE attempts SET passing = $1, code = $2, output = $3 WHERE id = $4",
      [passing, code, output, id]
    );

    res.json("Attempt was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete an attempt

app.delete("/attempts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAttempt = await pool.query("DELETE FROM attempts WHERE id = $1", [
      id
    ]);
    res.json("Attempt was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

let port = process.env.PORT

app.listen(port, () => {
  console.log(`app has started on port ${port}`)
})