const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

let posts = []; // Temporary storage for posts

// Home Route
app.get("/", (req, res) => {
    res.render("layout", { content: "home", posts });
  });


// New Post Route
app.post("/add", (req, res) => {
  const { title, content } = req.body;
  posts.push({ title, content });
  res.redirect("/");
});

// Edit Post Route
app.get("/edit/:id", (req, res) => {
  const id = req.params.id;
  const post = posts[id];
  res.render("edit", { id, post });
});

app.get("/edit/:id", (req, res) => {
    const id = req.params.id;
    const post = posts[id];
    res.render("layout", { content: "edit", id, post });
  });
  

// Delete Post Route
app.post("/delete/:id", (req, res) => {
  const id = req.params.id;
  posts.splice(id, 1);
  res.redirect("/");
});

// Start Server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
