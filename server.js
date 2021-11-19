const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//default response
app.get("/", async (request, response) => {
  try {
    response.json({ message: "All your base are belong to us." });
  } catch (err) {
    console.error(err.message);
  }
});

//get all fams
app.get("/families", async (request, response) => {
  try {
    const allFamilies = await pool.query("SELECT * FROM families");
    response.json(allFamilies.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a test
app.get("/tests/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const test = await pool.query("SELECT * FROM tests WHERE id = $1", [
      id
    ]);
    response.json(test.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get attempts for that test for a certain user
//not quite right
app.get("/attempts", async (request, response) => {
  try {
    const allAttempts = await pool.query("SELECT * FROM attempts");
    response.json(allAttempts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//create a user
app.post("/user", async (request, response) => {
  try {
    const { user_name, current_mod } = request.body;
    const newUser = await pool.query(
      "INSERT INTO families (user_name, current_mod) VALUES($1, $2) RETURNING *",
      [user_name, current_mod]
    );
    response.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//create a new family
app.post("/families", async (request, response) => {
  try {
    const { mod, title, datasets } = request.body;
    const newFamily = await pool.query(
      "INSERT INTO families (mod, title, datasets) VALUES($1, $2, $3) RETURNING *",
      [mod, title, datasets]
    );
    response.json(newFamily.rows[0]);
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

app.post("/tests", async (request, response) => {
  try {
    const { description, expected, methods, family } = request.body;
    const newTest = await pool.query(
      "INSERT INTO tests (description, expected, methods, family) VALUES($1, $2, $3, $4) RETURNING *",
      [description, expected, methods, family]
    );
    response.json(newTest.rows[0]);
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

app.post("/attempts", async (request, response) => {
  try {
    const { passing, code, output, user_id, test_id } = request.body;
    const newAttempt = await pool.query(
      "INSERT INTO attempts (passing, code, output, user_id, test_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [passing, code, output, user_id, test_id]
    );
    response.json(newAttempt.rows[0]);
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

app.put("/attempts/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const { passing, code, output } = request.body;
    const updateAttempt = await pool.query(
      "UPDATE attempts SET passing = $1, code = $2, output = $3 WHERE id = $4",
      [passing, code, output, id]
    );

    response.json("Attempt was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete an attempt

app.delete("/attempts/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const deleteAttempt = await pool.query("DELETE FROM attempts WHERE id = $1", [
      id
    ]);
    response.json("Attempt was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = app;