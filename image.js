const Jimp = require('jimp')
const { promisify} = require('util')
const readImageFileAsync = promisify(Jimp.read)

module.exports = {
    readImageFileAsync
}