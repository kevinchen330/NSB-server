const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');

const index = require('./routes/index');
const search = require('./routes/search');
const general = require('./routes/general');

const AWS_EC2 = false;

// all environments
const app = express();
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
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


// Add routes here
app.get('/', index.view);
app.get('/search', search.getSearch);
app.post('/business', search.getBusiness);
app.get('/about', general.renderAbout);
app.get('/contact', general.renderContact);

app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Example app listening on ${app.get('host')} ${app.get('port')}`);
});
