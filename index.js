let express = require('express');
let bodyParser = require('body-parser')
let ejs = require('ejs')
var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.engine("html", ejs.renderFile);
app.set("view engine", "html");

let posts = [];

app.post('/newpost', (req, res) => {
    let { postbody } =  req.body;
    posts.push(postbody);
    res.redirect("/");
});
app.get('/', (req, res) => {
    res.render('newpost', {posts: posts});
})
app.listen(8080, () => {
    console.log("Listening on 8080");

});


