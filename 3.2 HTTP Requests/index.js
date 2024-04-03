import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("<h1>HelloWorld</h1>");
});

app.get("/about", (req,res) => {
    res.send("<h1>About Me</h1><p>My name is Syed Imtiaz</p>");
});

app.get("/contact", (req,res) => {
    res.send("<h1>Contact</h1><p>Phone: 8870110611</p>");
});


app.listen(3000, () => {
    console.log(`Server running on port ${port}.`);
})
