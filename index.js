const fs = require('fs');
const { promisify } = require('util');

const { colorPalette, stand, imagePath,  } = require('./config')
const { readImageFileAsync } = require('./image')

const writeFileAsync = promisify(fs.writeFile)

const main = async () => {
    const image = readImageFileAsync(imagePath)
    console.log(image.bitmap.width)
    console.log(image.bitmap.height)
}

main()
