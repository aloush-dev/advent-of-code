const { readFileSync } = require("fs");
const fs = require("fs/promises");

const parseDataIntoArrayOfObjs = async () => {
  const data = await fs.readFile("./data.txt", "utf8");
  const splatData = data.split("\n");

  const formattedData = splatData.map((splodge) => {
    const [command, amount] = splodge.split(" ");

    return { command, amount: Number(amount) };
  });

  return formattedData;
};



const calculateSubPosition = (inputArray) => {
  let horizontalPosition = 0;
  let depth = 0;
  inputArray.forEach((instruction) => {
    if (instruction.command === "forward") {
      horizontalPosition += instruction.amount;
    }
    if (instruction.command === "down") {
      depth += instruction.amount;
    }
    if (instruction.command === "up") {
      depth -= instruction.amount;
    }
  });

  return horizontalPosition * depth;
};

const calculateTheAnswer = async () => {
  const data = await parseDataIntoArrayOfObjs();
  const result = calculateSubPosition(data);

  console.log(result);
};

calculateTheAnswer();
