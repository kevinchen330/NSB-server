const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const search = require('./routes/search');

const app = express();
const AWS_EC2 = true;
// all environments
app.set('port', process.env.PORT || 3000);
app.set('host', AWS_EC2 ? '0.0.0.0' : 'localhost');
app.use(express.static(path.join(__dirname, 'assets')));

// to support JSON-encoded bodies
app.use(bodyParser.json());
// to support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Add routes here
// app.get('/', index.view);
// app.get('/feedPage', feedPage.view);
// app.get('/details',details.feeddetails);
// app.get('/newPost',newPost.writePost);
// app.get('/emoji',emoji.emojiInfo);
// app.post('/login', login.processLogin);
// app.post('/signup', signup.processSignup);
// app.post('/addPost', newPost.addPost);
// Example route
// app.get('/users', user.list);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/search', search.getSearch);
app.post('/business', search.getBusiness);

app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Example app listening on ${app.get('host')} ${app.get('port')}`);
});
