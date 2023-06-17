const fs = require('fs/promises');


fs.unlink('./04-fileSystem/text.txt').then(() => {
    console.log('finished deleting');
});


