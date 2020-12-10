const dealdir = require('./dealDir.js');
const simpleGit = require('simple-git');
const repoPathArr = require('../list.json');
const { baseDir } = dealdir;

async function pullRepo() {
  for (let repoPath of repoPathArr) {
    if (repoPath) {

      let name = repoPath.match(/.+\/(.+)\.git$/)[1];

      const options = {
        baseDir: `${baseDir}\\${name}`,
        binary: 'git',
        maxConcurrentProcesses: 6,
      };

      await simpleGit(options).pull()
        .then(() => console.log('finished ' + name))
        .catch((err) => console.error('failed: ', err));

    }
  }
};

pullRepo();