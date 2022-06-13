var saveFile = async (data, archiveName) => {
    try {
        const fileData = fs.readFileSync(archiveName, 'utf8') || '[]';
        const objectJson = JSON.parse(fileData);
        objectJson.push(data);
        fs.writeFileSync(archiveName, JSON.stringify(objectJson, null, 2));
    }
    catch (error) {
        return {
            'error': true,
            'message': 'failed to read file',
            'thrownError': error
        };
    }
    return {
        'error': false,
        'message': 'file saved'
    };
}

var readFile = async (archiveName) => {
    try {
        const fileData = fs.readFileSync(archiveName, 'utf8') || '[]';
        const objectJson = JSON.parse(fileData.toString());
        return {
            'data': objectJson
        };
    }
    catch (error) {
        return {
            'error': true,
            'message': 'failed to read file',
            'thrownError': error
        };
    }
}