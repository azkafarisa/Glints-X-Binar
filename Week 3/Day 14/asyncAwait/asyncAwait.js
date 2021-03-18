// Import fs
const fs = require("fs");

// Make promise object
const readFile = (file, options) =>
  new Promise((success, failed) => {
    fs.readFile(file, options, (err, content) => {
      if (err) failed(err);
      return success(content);
    });
  });

const readAllFiles = async () => {
  try {
    // let data = await Promise.all([
    //   readFile("./contents/content1.txt", "utf-8"),
    //   readFile("./contents/content2.txt", "utf-8"),
    //   readFile("./contents/content3.txt", "utf-8"),
    //   readFile("./contents/content4.txt", "utf-8"),
    //   readFile("./contents/content5.txt", "utf-8"),
    //   readFile("./contents/content6.txt", "utf-8"),
    //   readFile("./contents/content7.txt", "utf-8"),
    //   readFile("./contents/content8.txt", "utf-8"),
    //   readFile("./contents/content9.txt", "utf-8"),
    //   readFile("./contents/content10.txt", "utf-8"),
    // ]);

    let content1 = await readFile("./contents/content1.txt", "utf-8");
    let content2 = await readFile("./contents/content2.txt", "utf-8");
    let content3 = await readFile("./contents/content3.txt", "utf-8");
    let content4 = await readFile("./contents/content4.txt", "utf-8");
    let content5 = await readFile("./contents/content5.txt", "utf-8");
    let content6 = await readFile("./contents/content6.txt", "utf-8");
    let content7 = await readFile("./contents/content7.txt", "utf-8");
    let content8 = await readFile("./contents/content8.txt", "utf-8");
    let content9 = await readFile("./contents/content9.txt", "utf-8");
    let content10 = await readFile("./contents/content10.txt", "utf-8");
    let result = content1+content2+content3+content4+content5+content6+content7+content8+content9+content10;

    //console.log(data);
    console.log(result);
  } catch (e) {
    console.log("What the error!");
  }
};

readAllFiles();
