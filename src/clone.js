const dealdir = require('./dealDir.js');
const simpleGit = require('simple-git');
const repoPathArr = require('../config/list.json');
const { baseDir } = dealdir;

const options = {
  baseDir,
  binary: 'git',
  maxConcurrentProcesses: 6,
};
const git = simpleGit(options);

async function getRepo() {
  for (let repoPath of repoPathArr) {
    if (repoPath) {

      await git.silent(true)
        .clone(repoPath)
        .then(() => console.log('finished ' + repoPath.match(/.+\/(.+)\.git$/)))
        .catch((err) => console.error('failed: ', err));

    }
  }
};

getRepo();