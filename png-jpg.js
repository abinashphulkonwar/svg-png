const { readFileSync, writeFileSync } = require("fs");
const sharp = require("sharp");

const ConvertPngToPng = async (svgPath, outputPath) => {
  const data = readFileSync(svgPath);

  await sharp(data)
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .png({ quality: 100 })
    .toFile(outputPath) // Change 'output.jpg' for JPG
    .then(() => {
      console.log("Image successfully saved as PNG");
    })
    .catch((err) => {
      console.error("Error processing the image:", err);
    });
};
ConvertPngToPng(
  "./App Store Screenshot ipad.png",
  "./App Store Screenshot ipad 1.png"
);
