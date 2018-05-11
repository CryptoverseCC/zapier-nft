const post = require('./triggers/post');
const reply = require('./triggers/reply');
const like = require('./triggers/like');

// const hydrators = require('./utils/hydrators');

// Now we can roll up all our behaviors in an App.
const App = {
  // This is just shorthand to reference the installed dependencies you have. Zapier will
  // need to know these before we can upload
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  beforeRequest: [],

  afterResponse: [],

  resources: {},

  hydrators: {},
  // If you want your trigger to show up, you better include it here!
  triggers: {
    [post.key]: post,
    [reply.key]: reply,
    [like.key]: like,
  },

  // If you want your searches to show up, you better include it here!
  searches: {},

  // If you want your creates to show up, you better include it here!
  creates: {},
};

// Finally, export the app.
module.exports = App;
