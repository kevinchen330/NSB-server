const Yelp = require('yelp');
const Promise = require('promise');

const yelp = new Yelp({
  consumer_key: '-hv1zoeIOpAM3t2uYTBz4g',
  consumer_secret: 'Sg9QCpl__AwDVbuokaoLjYbpqE0',
  token: 'pAgz-Gu4kJspER-b_dWQ-zJitC7xlL6K',
  token_secret: '62-I3hbU0vl9Xf9eQu_b3-owNDU',
});

exports.getSearch = (req, res) => {
  const location = req.query.location;

  yelp.search({
    term: 'pho',
    location,
  })
  .then((data) => {
    console.log(JSON.stringify(data, null, 2));
    res.send(data);
  })
  .catch((err) => {
    console.error(err);
  });
};

exports.getBusiness = (req, res) => {
  // this.result = {};
  // let me = this;
  const businessIDs = req.body.businessIDs;

  const promises = [];
  businessIDs.forEach((businessID) => {
    promises.push(yelp.business(businessID));
  });
  Promise.all(promises).then((values) => {
    console.log(values);
    res.send(values);
  });


  // Promise.all(
  //   businessIDs.forEach((businessID) => {
  //     yelp.business(businessID)
  //     .then((data) => {
  //       // console.log(JSON.stringify(data, null, 2));
  //       result[businessID] = data;
  //       return Promise.resolve();
  //       // console.log(result);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  //   }))
  //   .then(() => {
  //     console.log(result);
  //     res.send(result);
  //   });
};
