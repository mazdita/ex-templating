const hbs = require('hbs');
const moment = require('moment');

// Iteration 2: register partials
hbs.registerPartials(`${__dirname}/../views/partials`);


// Iteration 2: register active helper for nav
// hbs.registerHelper('helper_name', (ar1, arg2, options) => {...});


// Iteration 3: register date helper for tweets
