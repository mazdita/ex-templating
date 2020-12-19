const tweetsDB = require('../data/tweets');
const uuid = require('uuid');

module.exports.list = (req, res, next) => {
  const { user } = req.query;
  const tweets = tweetsDB
    .filter(tweet => user ? tweet.user.includes(user) : true)
    .sort((t1, t2) => t2.createdAt - t1.createdAt);
  
    res.render('tweets/list', {
      tweets: tweets,
      user: user
    });
}

module.exports.fav = (req, res, next) => {
  const { id } = req.params;
  const tweet = tweetsDB.find(tweet => tweet.id === id);
  if (tweet) {
    tweet.fav = !tweet.fav
  }
  res.redirect('/tweets');
}

module.exports.create = (req, res, next) => {
  const { user, message } = req.body;
  const errors = {}
  if (!user) {
    errors.user = 'Username is mandatory';
  }
  if (!message) {
    errors.message = 'Message is mandatory';
  }

  if (Object.keys(errors).length > 0) {
    // There are errors => show errors at the form
    res.status(400)
      .render('tweets/list', {
        tweet: req.body,
        errors: errors
      });
  } else {
    // No errors => create tweet & redirect to tweet list
    tweetsDB.push({
      id: uuid.v4().toString(),
      user: user,
      message: message,
      createdAt: new Date()
    })
    res.redirect('/tweets');
  }
  
}
