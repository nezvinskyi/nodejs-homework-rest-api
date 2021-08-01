const Jimp = require('jimp');

const imageNormalize = imagePath => {
  Jimp.read(`${imagePath}`, (err, convertedImage) => {
    if (err) {
      throw err;
    }
    convertedImage.resize(250, 250).quality(60).greyscale().write(`${imagePath}`);
  });
};

module.exports = imageNormalize;
