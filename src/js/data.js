/* eslint-disable */
const games = require('../data/games.json');
const apps = require('../data/apps.json');

[apps, games].flat().forEach((app) => {
  if (app.icon) app.icon = `static/apps-images/${app.icon}`;
  app.screenshots = app.screenshots.map((fileName) => `https://cdn.jsdelivr.net/gh/ChenYFan-Tester/Appstore/master/static/apps-images/${fileName}`);
  app.screenshotsThumbs = app.screenshots;
});

export { games, apps };
