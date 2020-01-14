const fs = require("fs");
const child_process = require("child_process");

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

      child_process.exec("npm init", (err, stdout, stderr) => {
        if (err) {
          console.error(`exec error: ${err}`);
        } else {
          console.log(`npm init was executed in ${projectName}`);
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

// fs.writeFile(`${projectName}/package.json`, "", err => {
//   if (err) {
//     throw err;
//     // node ../path/to/my-awesome/tool/script.js --arguments s
//   } else console.log("package.json file created inside directory");
// });
