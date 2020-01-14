const fs = require("fs");

const projectGen = projectName => {
  fs.mkdir(`${projectName}`, err => {
    if (err) {
      throw err;
    }
    fs.writeFile(`${projectName}/index.js`, "", err => {
      if (err) {
        throw err;
      }
      console.log("directory and file created");
    });
  });
};

projectGen("test");

// fs.writeFile(`./${projectName}/index.js`, err => {
//   if (err) {
//     return err;
//   }
// });
