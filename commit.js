const { exec } = require('child_process');

const personalAccessToken = process.env.PERSONAL_ACCESS_TOKEN;
const username = process.env.USERNAME;
const gitOptions = { env: { ...process.env, GIT_ASKPASS: 'echo', GIT_USERNAME: username, GIT_PASSWORD: personalAccessToken } };

function commit(newFilePath, commitMessage) {
    // Step 1: Add the new file to the staging area
exec(`git add ${newFilePath}`, gitOptions, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error adding the file to the staging area: ${error.message}`);
      return;
    }
  
    // Step 2: Commit the changes with the commit message
    
    exec(`git commit -m "${commitMessage}"`, gitOptions, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error committing the changes: ${error.message}`);
        return;
      }
  
      const remoteRepositoryUrl = 'https://github.com/Adviknk/recommendr';

      exec(`git push ${remoteRepositoryUrl} main`, gitOptions, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error pushing the changes to the remote repository: ${error.message}`);
          return;
        }
  
        console.log('New file successfully added, committed, and pushed!');
      });
    });
  });
  
}


module.exports = {
    commit
}