const { readFileSync, writeFileSync } = require("fs");
const sharp = require("sharp");

const ConvertSvgToPng = async (svgPath, outputPath, width, height) => {
  const data = readFileSync(svgPath);

  const buffer = Buffer.from(data);

  await sharp(buffer)
    .resize(width, height)
    .png({ quality: 100 })
    .toFile(`${width}x${height}-${outputPath}`) // Change 'output.jpg' for JPG
    .then(() => {
      console.log("Image successfully saved as PNG");
    })
    .catch((err) => {
      console.error("Error processing the image:", err);
    });
};
// for display 6.9
// (1320 × 2868px, 2868 × 1320px, 1290 × 2796px or 2796 × 1290px)
//ConvertSvgToPng("./images/App Store Screenshot 1.jpg", "1.png", 1320, 2868);
ConvertSvgToPng("./images/App Store Screenshot 2.jpg", "2.png", 1320, 2868);
ConvertSvgToPng("./images/App Store Screenshot 3.jpg", "3.png", 1320, 2868);
//ConvertSvgToPng("./images/App Store Screenshot 4.jpg", "4.png", 1320, 2868);
