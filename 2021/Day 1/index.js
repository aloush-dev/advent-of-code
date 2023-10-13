const fs = require("fs/promises");

const turnToJson = () => {
  fs.readFile("./data.txt", "utf-8").then((data) => {
    const numArray = data.split("\n");
    return fs.writeFile("./data.json", JSON.stringify(numArray));
  });
};

exports.doTheThing = (data) => {
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    if (Number(data[i + 1]) > Number(data[i])) {
      count++;
    }
  }

  return count;
};

exports.doTheThingPart2 = (data) => {
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    let current = Number(data[i]) + Number(data[i + 1]) + Number(data[i + 2]);
    let next = Number(data[i + 1]) + Number(data[i + 2]) + Number(data[i + 3]);

    if (next > current) {
      count++;
    }
  }
  return count;
};
