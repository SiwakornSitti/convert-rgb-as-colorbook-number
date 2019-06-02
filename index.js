const { clearFile, writeBlankLine, writeContentLine } = require('./file')
const { startLine, rows, newLine } = require('./constants')
const { colorPalette, plateSize, stand, imagePath, outputFilename } = require('./config')
const { readImageFileAsync } = require('./image')
const betweenPage = '\t\t'

const main = async () => {
    const image = await readImageFileAsync(imagePath)
    console.log(image.bitmap.width)
    console.log(image.bitmap.height)

    let currentRow = 0;
    await clearFile(outputFilename);
    await writeBlankLine(outputFilename);

    const rowLabel = generateRowLabel(currentRow++, stand.width)
    await writeContentLine(outputFilename, rowLabel);
    
    for(let y = 0; y < image.bitmap.height; y++){
        let line = startLine
        
        for(let x = 0; x < image.bitmap.width; x++){
            line += `${colorPalette[image.getPixelColor(x,y).toString(16)]} `
            
            if((x+1) % plateSize.width === 0 ) {
                line += betweenPage
            }
        }

        await writeContentLine(outputFilename, line);
        await writeBlankLine(outputFilename)
        line = startLine;

        if((y+1) % plateSize.height === 0 && (y+1) < image.bitmap.height ) {
            await writeBlankLine(outputFilename)
            await writeBlankLine(outputFilename)
            const rowLabel = generateRowLabel(currentRow++, stand.width)
            await writeContentLine(outputFilename, rowLabel);
        }
    }
}

const generateRowLabel = (rowIndex, totalColumns) => {
    let result = startLine;
    const behindSpace = '\t\t\t\t\t'
    for(let column = 1; column <= totalColumns; column++){
        result += `${rows[rowIndex]}${column}${behindSpace}`
    }
    return `${result}${newLine}`
}

main()
