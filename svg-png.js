const { readFileSync, writeFileSync } = require("fs");
const sharp = require("sharp");

const ConvertSvgToPng = async (svgPath, outputPath) => {
  const data = readFileSync(svgPath, "utf-8");

  const buffer = Buffer.from(data);

  await sharp(buffer)
    .resize(1020)
    .png({ quality: 100 })
    .toFile(outputPath) // Change 'output.jpg' for JPG
    .then(() => {
      console.log("Image successfully saved as PNG");
    })
    .catch((err) => {
      console.error("Error processing the image:", err);
    });
};
ConvertSvgToPng("./3.txt", "./3.png");
