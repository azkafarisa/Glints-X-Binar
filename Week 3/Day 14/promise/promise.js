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


  // let content1 = readFile("./contents/content1.txt", "utf-8");
  // let content2 = readFile("./contents/content2.txt", "utf-8");
  // let content3 = readFile("./contents/content3.txt", "utf-8");
  // let content4 = readFile("./contents/content4.txt", "utf-8");
  // let content5 = readFile("./contents/content5.txt", "utf-8");
  // let content6 = readFile("./contents/content6.txt", "utf-8");
  // let content7 = readFile("./contents/content7.txt", "utf-8");
  // let content8 = readFile("./contents/content8.txt", "utf-8");
  // let content9 = readFile("./contents/content9.txt", "utf-8");
  // let content10 = readFile("./contents/content10.txt", "utf-8");
  // let result = toString(content1+content2+content3+content4+content5+content6+content7+content8+content9+content10);

Promise.all([
  readFile("./contents/content1.txt", "utf-8"),
  readFile("./contents/content2.txt", "utf-8"),
  readFile("./contents/content3.txt", "utf-8"),
  readFile("./contents/content4.txt", "utf-8"),
  readFile("./contents/content5.txt", "utf-8"),
  readFile("./contents/content6.txt", "utf-8"),
  readFile("./contents/content7.txt", "utf-8"),
  readFile("./contents/content8.txt", "utf-8"),
  readFile("./contents/content9.txt", "utf-8"),
  readFile("./contents/content10.txt", "utf-8"),
])
.then((result) => {
  console.log(result.join(" "));
})
.catch((error) => console.error("It's wrong!"))



// readFile("./contents/content1.txt", "utf-8")
//   .then((content1) => {
//     console.log(content1);
//     return readFile("./contents/content2.txt", "utf-8");
//   })
//   .then((content2) => {
//     console.log(content2);
//     return readFile("./contents/content3.txt", "utf-8");
//   })
//   .then((content3) => {
//     console.log(content3);
//     return readFile("./contents/content4.txt", "utf-8");
//   })
//   .then((content4) => {
//     console.log(content4);
//     return readFile("./contents/content5.txt", "utf-8");
//   })
//   .then((content5) => {
//     console.log(content5);
//     return readFile("./contents/content6.txt", "utf-8");
//   })
//   .then((content6) => {
//     console.log(content6);
//     return readFile("./contents/content7.txt", "utf-8");
//   })
//   .then((content7) => {
//     console.log(content7);
//     return readFile("./contents/content8.txt", "utf-8");
//   })
//   .then((content8) => {
//     console.log(content8);
//     return readFile("./contents/content9.txt", "utf-8");
//   })
//   .then((content9) => {
//     console.log(content9);
//     return readFile("./contents/content10.txt", "utf-8");
//   })
//   .then((content10) => {
//     console.log(content10);
//   })
//   .catch((error) => console.error("It's wrong!"))
