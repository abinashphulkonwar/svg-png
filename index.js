const { readFileSync, writeFileSync } = require("fs");
const sharp = require("sharp");

const init = async () => {
  const data = readFileSync("./svg/3.svg").toString();

  console.log(data.slice(0, 100));

  const buffer = Buffer.from(data.split("base64").pop(), "base64");

  await sharp(buffer)
    .toFile("output.jpeg") // Change 'output.jpg' for JPG
    .then(() => {
      console.log("Image successfully saved as PNG");
    })
    .catch((err) => {
      console.error("Error processing the image:", err);
    });
  const imgData = readFileSync("output.jpeg");
  const base64 = imgData.toString("base64");
  const base64Data = `data:image/jpeg;base64,${base64}`;
  writeFileSync("./3.txt", base64Data);
};

init();
