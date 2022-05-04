require('dotenv').config();
const githubLabelSync = require('github-label-sync');
const labels = require('./json/labels.json');

githubLabelSync({
  accessToken: process.env.ENV_ACCESS_TOKEN,
  repo: process.env.ENV_REPO,
  labels: labels,
  dryRun: false,
}).then(diff => {
  console.log(diff);
});