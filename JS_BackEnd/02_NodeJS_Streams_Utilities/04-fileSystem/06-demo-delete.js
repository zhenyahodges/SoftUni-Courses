const fs = require('fs/promises');

// delete file or link

fs.unlink('./04-fileSystem/text.txt').then(() => {
    console.log('finished deleting');
});


