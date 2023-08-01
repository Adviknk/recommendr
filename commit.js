const { exec } = require('child_process');



function commit(newFilePath, commitMessage) {
    // Step 1: Add the new file to the staging area
exec(`git add ${newFilePath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error adding the file to the staging area: ${error.message}`);
      return;
    }
  
    // Step 2: Commit the changes with the commit message
    exec(`git commit -m "${commitMessage}"`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error committing the changes: ${error.message}`);
        return;
      }
  
      // Step 3: Push the changes to the remote repository (e.g., GitHub)
      exec('git push origin main', (error, stdout, stderr) => {
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