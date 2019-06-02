const Jimp = require('jimp')
const readImageFileAsync = promisify(Jimp.read)

module.exports = {
    readImageFileAsync
}