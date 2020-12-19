const hbs = require('hbs');
const moment = require('moment');

hbs.registerPartials(__dirname + '/../views/partials/');

hbs.registerHelper('active', (currentPath, hint, options) => {
  const args = options.hash;
  if (args.exact) {
    return currentPath === hint ? 'active' : '';
  } else {
    return currentPath.includes(hint) ? 'active' : '';
  }
});

hbs.registerHelper('date', (date) => {
  return moment(date).startOf('minute').fromNow();
})
