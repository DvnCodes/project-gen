const fs = require("fs");

const projectGen = projectName => {
  fs.mkdir(`${projectName}`, err => {
    if (err) {
      throw err;
    } else {
      console.log("project directory created");
      fs.writeFile(`${projectName}/index.js`, "", err => {
        if (err) {
          throw err;
        } else console.log("file created inside directory");
      });
      fs.writeFile(`${projectName}/README.md`, "", err => {
        if (err) {
          throw err;
        } else console.log("readme file created inside directory");
      });
      fs.writeFile(`${projectName}/\.gitignore`, "", err => {
        if (err) {
          throw err;
        } else console.log("gitignore file created inside directory");
      });
      fs.mkdir(`${projectName}/spec`, err => {
        if (err) {
          throw err;
        } else {
          console.log("spec directory created");
          fs.writeFile(`${projectName}/spec/index.spec.js`, "", err => {
            if (err) {
              throw err;
            } else console.log("index.spec file created inside directory");
          });
        }
      });
    }
  });
};

projectGen("test");

// fs.writeFile(`./${projectName}/index.js`, err => {
//   if (err) {
//     return err;
//   }
// });
