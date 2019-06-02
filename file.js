const fs = require('fs');
const { promisify } = require('util');
const newLine = (process.platform === 'win32' ? '\r\n' : '\n')
const appendFileOption = { flag: 'a+' }
const writeFileAsync = promisify(fs.writeFile)

const clearFile = async (filename) => writeFileAsync(filename,'')
const writeBlankLine = async (filename) => writeFileAsync(filename, newLine, appendFileOption)
const writeContentLine = async (filename, data) => writeFileAsync(filename, data, appendFileOption)

module.exports = {
    clearFile, 
    writeContentLine,
    writeBlankLine
}