const rows = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
const startLine = `\t\t`;
const newLine = (process.platform === 'win32' ? '\r\n' : '\n')

module.exports = {
    rows,
    startLine,
    newLine
}