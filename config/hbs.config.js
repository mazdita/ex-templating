const hbs = require('hbs');

hbs.registerPartials(__dirname + '/../views/partials/');

hbs.registerHelper('active', (currentPath, hint, exact = false) => {
  console.log(currentPath);
  if (exact) {
    return currentPath === hint ? 'active' : '';
  } else {
    return currentPath.includes(hint) ? 'active' : '';
  }
})
